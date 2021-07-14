import idGenerator from 'Utils/IdGenerator';
import styles from 'Components/SelectWithLabel/SelectWithLabel.module.scss';

interface Option {
    key: string;
    data: string;
    value: string;
}

interface SelectWithPageProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: Option[];
    label: string;
}

const SelectWithLabel: React.FC<SelectWithPageProps> = (props: SelectWithPageProps) => {
  const selectId = String(idGenerator());

  return (
    <div className={styles.select}>
      <label htmlFor={selectId}>{props.label}</label>
      <select id={selectId} className={styles['custom-select']} style={{ width: 200 }} {...props}>
        {props.options.map((option) => (
          <option
            key={option.key}
            value={option.value}
          >
            {option.data}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectWithLabel;
