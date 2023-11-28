const Layout = ({ children }) => {
  return (
    <div className="max-w-xl">
      <div className="mockup-code mb-8">
        <pre data-prefix="$">
          <code>yarn create next-app nextjs-tutorial</code>
        </pre>
      </div>
      {children}
    </div>
  );
};
export default Layout;
