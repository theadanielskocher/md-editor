import './title-bar.css';

const TitleBar = ({ title, aside }) => (
  <div className="mb-4">
    <div className="titleBar__wrap">
      { title && <titleh>  { title }</titleh> }
      {/* aside && <h6>{ aside }</h6> */} 
    </div>
  </div>
);

export default TitleBar;

// className="mb-2"