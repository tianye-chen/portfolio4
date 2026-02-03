require("dotenv").config();

const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;
const SECRET = process.env.SECRET;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.post("/api/blog/post", async (req, res) => {
  const { title, description, image, tags, content, secret } = req.body;

  if (secret !== SECRET) {
    return res.status(403).json({ error: "Unauthorized" });
  }

  try {
    await client.connect();
    const database = client.db("blogs");
    const posts = database.collection("posts");
    const newPost = {
      title: title,
      description: description,
      image: image,
      tags: tags,
      content: content,
      createdAt: new Date(),
    };
    const result = await posts.insertOne(newPost);
    console.log(result);
    res.status(201).json({ message: "Blog post created", postId: result.insertedId });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close();
  }
});

app.get("/api/blog/get", async (req, res) => {
  console.log(`Requested blog posts.`);
  try {
    await client.connect();
    const database = client.db("blogs");
    const posts = database.collection("posts");
    const allPosts = await posts.find({}).toArray();
    res.status(200).json(allPosts);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
