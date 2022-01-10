import s from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/contacts/contactsActions";
import { getFilter } from "../../redux/contacts/contactsSelectors";
import { useTranslation } from "react-i18next";

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <label className={s.label}>
      <span className={s.item}>{t("find-contact-by-name")}</span>
      <input
        className={s.input}
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        type="text"
        name="filter"
      />
    </label>
  );
};

export default Filter;
