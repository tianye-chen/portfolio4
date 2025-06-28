import { icons, attributions } from "./Components/Data/aboutMeIcons";

export const Attributions = () => {
  return (
    <div class="pl-4">
      <p class="mb-4">Icon Attributions:</p>
      {icons.map((name, index) => (
        <div key={index} class="flex h-[48px] gap-4 my-4 hover:text-blue-600">
          <img src={`./about_me_icons/${name}.png`} />
          <span class='min-h-full flex items-center'>{attributions[name] ? attributions[name] : "N/A"}</span>
        </div>
      ))}
    </div>
  );
};
