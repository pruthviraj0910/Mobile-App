const MobileWrapper = ({ children }) => {
  return (
    <div className="center-screen">
      <div className="mobile-box">{children}</div>
    </div>
  );
};

export default MobileWrapper;
