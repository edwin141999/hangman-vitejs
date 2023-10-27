export default function Letters({ letter, onClick }) {
  
  return (
    <div
      className="rounded-lg border-2 border-black text-center cursor-pointer"
      onClick={onClick}
    >
      <p className="font-bold text-black text-xl active:text-white">{letter}</p>
    </div>
  );
}
