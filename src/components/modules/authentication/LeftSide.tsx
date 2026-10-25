import BrandMark from "@/components/shared/BrandMark";
import CheckIcon from "./CheckIcon";

type LeftSideProps = {
  headingTextOne: string;
  headingTextTwo: string;
  descriptionText: string;
};

export default function LeftSide({
  headingTextOne,
  headingTextTwo,
  descriptionText,
}: LeftSideProps) {
  return (
    <div>
      <div className="flex justify-center gap-2 md:justify-start">
        <BrandMark />
      </div>

      <div className="mt-10 flex flex-col gap-4 tracking-tighter">
        <h1 className="text-6xl text-white font-bold font-heading">
          {headingTextOne}{" "}
          <span className="text-chart-2">{headingTextTwo}</span>
        </h1>
        <h5 className="text-white/85 font-mono">{descriptionText}</h5>
      </div>

      <div className="mt-6 w-full"></div>

      <div>
        <div className="flex flex-row gap-2 items-center">
          <CheckIcon
            className="size-4 bg-chart-2"
            iconClassName="size-3 text-black"
          />
          <span className="text-white font-medium">
            Submit and manage student projects
          </span>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <CheckIcon
            className="size-4 bg-chart-2"
            iconClassName="size-3 text-black"
          />
          <span className="text-white font-medium">
            Follow project review progress
          </span>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <CheckIcon
            className="size-4 bg-chart-2"
            iconClassName="size-3 text-black"
          />
          <span className="text-white font-medium">
            Review decisions and daily admin insights
          </span>
        </div>
      </div>
    </div>
  );
}
