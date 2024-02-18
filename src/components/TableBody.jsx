import { formatter } from "../util/investment";

export default function TableBody({ results }) {
  return (
    <tbody>
      {results.map((item, idx) => {
        let totalInvesment = item.interest;
        if (idx > 0) {
          for (let i = 0; i < idx; i++) {
            totalInvesment += results[i].interest;
          }
        }
        const investedCapital = item.valueEndOfYear - totalInvesment;
        return (
          <tr key={item.year}>
            <th>{item.year}</th>
            <th>{formatter.format(item.valueEndOfYear)}</th>
            <th>{formatter.format(item.interest)}</th>
            <th>{formatter.format(totalInvesment)}</th>
            <th>{formatter.format(investedCapital)}</th>
          </tr>
        );
      })}
    </tbody>
  );
}
