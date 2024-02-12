import TitleBar from '../title-bar/title-bar';
import ReactMarkdown from 'react-markdown';
import { useMarkdown } from '../../providers/markdown-provider';
import './preview.css';
import remarkGfm from 'C:/Users/Hai Dang/node_modules/remark-gfm';
import rehypeKatex from 'C:/Users/Hai Dang/node_modules/rehype-katex';
import remarkMath from 'C:/Users/Hai Dang/node_modules/remark-math';
import 'katex/dist/katex.min.css';


const Preview = () => {
  const [markdown] = useMarkdown();

  return (
    <div className="preview">
      <TitleBar title="Markdown Preview" />
      <div className="preview__scroll">
      <ReactMarkdown remarkPlugins={[[remarkGfm], [remarkMath]]} rehypePlugins={[rehypeKatex]}>{ markdown }</ReactMarkdown>
      </div>
    </div>
  );
}

export default Preview;
