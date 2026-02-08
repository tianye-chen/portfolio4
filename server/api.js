import { TOTP } from "totp-generator";
import { MongoClient, ServerApiVersion } from "mongodb";
import serverless from "serverless-http";
import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
const router = express.Router();
const PORT = process.env.PORT;
const SECRET = process.env.SECRET;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());
app.use('/.netlify/functions/api', router)

const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

router.post("/blog/post", async (req, res) => {
  const { title, description, image, tags, content, secret } = req.body;

  if (secret !== await generateTOTP()) {
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

router.get("/blog/get", async (req, res) => {
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

const generateTOTP = async () => {
  const { otp } = await TOTP.generate(SECRET, { digits: 6, period: 30})
  return otp;
}

if (process.env.NODE_ENV === "production") {
  app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  })
}

module.exports.handler = serverless(app);