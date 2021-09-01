import idGenerator from 'Utils/IdGenerator';
import styles from 'Components/SelectWithLabel/SelectWithLabel.module.scss';

export interface SelectOption {
    key: string;
    /**
     * We see the data in ui
     */
    data: string;

    /**
     * Hidden data's id
     */
    value: string;
}

interface SelectWithPageProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: SelectOption[];
    label: string;
}

const SelectWithLabel: React.FC<SelectWithPageProps> = (props: SelectWithPageProps) => {
  const selectId = String(idGenerator());

  return (
    <div className={styles.select}>
      <label htmlFor={selectId} className={styles.label}>{props.label}</label>
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
