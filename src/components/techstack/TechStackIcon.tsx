import arraySplit from "../../utils/arraySplit";
import techStacks, { techStacksProps } from "@/constants/techStack";


const TechStackIcon = () => {
  const leftSideStack = arraySplit(techStacks, 3);
  const [firstRow, secondRow, thirdRow, fourthRow] = leftSideStack;

  console.log(thirdRow);


  const lowerSideStack = arraySplit(techStacks, 6);
  const [_ , __ ,  thirdLongRow, fourthLongRow] = lowerSideStack;

  console.log(fourthLongRow);
  return (
    <div>
      {thirdLongRow.map((s:techStacksProps) => (
        <div key={s.id}>{s.name}</div>
      ))}
    </div>
  )
}

export default TechStackIcon;


