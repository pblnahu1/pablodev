interface FilterPillsProps {
  options: string[];
  activeOption: string;
  onChange: (option: string) => void;
}

export function FilterPills({ options, activeOption, onChange }: FilterPillsProps) {
  return (
    <div className="filters" role="group" aria-label="Filtrar proyectos por categoría">
      {options.map((option) => {
        const isActive = activeOption === option;
        return (
          <button
            key={option}
            type="button"
            className={isActive ? "active" : ""}
            aria-pressed={isActive}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}