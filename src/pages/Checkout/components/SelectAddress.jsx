export function SelectAddress({ addressList, onChange, className, titleName }) {
  return (
    <select className={className} onChange={(e) => onChange(e)}>
      <option value="default"> {titleName}</option>
      {addressList?.map((data, i) => {
        return (
          <option value={data.code} key={i}>
            {data.name}
          </option>
        );
      })}
    </select>
  );
}
