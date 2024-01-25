import { ButtonGroup, Dropdown } from "react-bootstrap";

export type Filter = {
  label: string;
  options: string[];
};

type FiltersSectionProps = {
  filters: Filter[];
  selectedFilters: Filter[];
  onFilterChange: (index: number, option: string) => void;
};

export default function FiltersSection({
  filters,
  selectedFilters,
  onFilterChange,
}: FiltersSectionProps) {
  return (
    <ButtonGroup className="mb-1">
      {filters.map((filter, index) => (
        <Dropdown key={index} className="me-1">
          <Dropdown.Toggle
            variant="primary"
            id={`dropdown-${index}`}
            className={selectedFilters[index] ? "selected-filter" : ""}
          >
            {filter.label}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {filter.options.map((option, optionIndex) => (
              <Dropdown.Item
                key={optionIndex}
                className={selectedFilters[index].options.includes(option) ? "bg-success-subtle" : ""}
                onClick={() => onFilterChange(index, option)}
              >
                {option}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      ))}
    </ButtonGroup>
  );
}
