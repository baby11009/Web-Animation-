const CompCard = ({ children }) => {
  return (
    <div className='aspect-square p-10 border-2 rounded-[20px] shadow-[16px_16px_0_0_rgba(255,255,255,1)] hover:shadow-[4px_4px_0_0_rgba(255,255,255,1)] transition-all duration-300 ease-in-out'>
      {children}
    </div>
  );
};
export default CompCard;
