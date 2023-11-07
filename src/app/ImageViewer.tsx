export default function ImageViewer({
  imgSrces,
}: {
  imgSrces: { [name in string]: string };
}) {
  console.log(imgSrces);
  return (
    <ul className="grid grid-cols-2 gap-4">
      {Object.entries(imgSrces).map(([name, src], i) => (
        <li key={name} className="flex justify-center items-center">
          <img src={src} />
        </li>
      ))}
    </ul>
  );
}
