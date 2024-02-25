import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './index';

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-accent">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="cucumber">Cucumber</SelectItem>
          <SelectItem value="tomato">Tomato</SelectItem>
          <SelectItem value="pumpkin">Pumpkin</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
