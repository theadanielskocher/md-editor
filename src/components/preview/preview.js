import TitleBar from '../title-bar/title-bar';
import ReactMarkdown from 'react-markdown';
import { useMarkdown } from '../../providers/markdown-provider';
import './preview.css';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import 'katex/dist/katex.min.css';
import remarkBreaks from 'remark-breaks';
import emoji from 'remark-emoji';


const Preview = () => {
  const [markdown] = useMarkdown();
  return (
    <div className="preview">
      <TitleBar title="Markdown Preview" />
      <div className="preview__scroll">
        <ReactMarkdown remarkPlugins={[[remarkGfm], [remarkMath], [remarkBreaks], [emoji]]} rehypePlugins={[rehypeKatex]}>{ markdown }</ReactMarkdown>
      </div>
      <a href="https://theadanielskocher.github.io/about/" target="_blank" rel="noopener noreferrer"><button>About</button></a>
    </div>
  );
}



export default Preview;
