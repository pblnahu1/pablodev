type FilterPillsProps = { options: string[]; activeOption: string; onChange: (option: string) => void };

export function FilterPills({ options, activeOption, onChange }: FilterPillsProps) {
  return (
    <div className="filters" aria-label="Filtrar proyectos">
      {options.map((option) => (
        <button key={option} className={activeOption === option ? "active" : ""} onClick={() => onChange(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}