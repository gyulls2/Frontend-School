import { useDispatch, useSelector } from "react-redux";
import { setIncomeAction } from "../../store/expense/expense-slice";

export default function IncomeInput() {
  const income = useSelector((store) => store.expense.income);
  const dispatch = useDispatch();

  function setIncome(event) {
    dispatch(setIncomeAction(parseInt(event.target.value)));
  }

  return (
    <label>
      수입 입력
      <input
        type="text"
        defaultValue={income}
        placeholder="예: 3000"
        onChange={setIncome}
      />
    </label>
  );
}
