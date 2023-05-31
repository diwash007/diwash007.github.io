function Button({ text, icon, onClick, disabled = false }: any) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${
        disabled
          ? "bg-primary/40 text-white/50"
          : "text-white bg-opacity-90 bg-primary hover:bg-opacity-100"
      } py-2 px-4 text-white font-medium rounded-md`}
    >
      <span className="flex gap-1 justify-center items-center">
        {text} {icon}
      </span>
    </button>
  );
}

export default Button;
