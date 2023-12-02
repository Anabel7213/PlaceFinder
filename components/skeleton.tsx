export default function Skeleton() {
  return (
    <div className="border border-black space-y-3 bg-white shadow rounded-md p-4 w-[430px] md:w-[235px] relative mb-4">
      <div className="rounded-lg bg-slate-100 h-[100px] w-full border border-black"></div>
      <div className="h-4 bg-slate-100 rounded border border-black"></div>
      <div className="grid grid-cols-3 gap-4">
        <div className="h-4 bg-slate-100 rounded col-span-2 border border-black"></div>
        <div className="h-4 bg-slate-200 rounded col-span-1"></div>
      </div>
      <div className="h-4 bg-slate-100 rounded border border-black"></div>
      <div className="h-[40px] bg-slate-100 rounded border border-black"></div>
    </div>
  );
}
