import { icons, attributions } from "./Data/aboutMeIcons";

export const Attributions = () => {
  return (
    <div className="pl-4">
      <p className="mb-4">Icon Attributions:</p>
      {icons.map((name, index) => (
        <div key={index} className="flex h-[48px] gap-4 my-4 hover:text-blue-600">
          <img src={`./about_me_icons/${name}.png`} />
          <span className='min-h-full flex items-center'>{attributions[name] ? attributions[name] : "N/A"}</span>
        </div>
      ))}
    </div>
  );
};
