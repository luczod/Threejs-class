type TAlert = {
  text: string;
  type: string;
};

export function Alert({ type, text }: TAlert) {
  return (
    <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
      <div
        aria-label={type}
        className="p-2 aria-[label=danger]:bg-red-800 bg-blue-500 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
        role="alert"
      >
        <p
          aria-label={type}
          className="flex rounded-full aria-[label=danger]:bg-red-800 bg-blue-500 uppercase px-2 py-1 text-xs font-semibold mr-3"
        >
          {type === 'danger' ? 'Failed' : 'Success'}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
}
