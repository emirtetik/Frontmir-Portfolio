import React, { useState, useEffect, useRef } from 'react';
import MarkAboutcss from '../../styles/MarkdownAbout.module.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/monokai.css';

function MarkdownAbout() {
  const syntaxHighlighterStyles = {
    background: 'transparent',
    color: '#f8f8f2',
  };

  const defaultAbout = `const merhabaBenEmir = () => {

  return (
    <div className={MarkAboutcss.container}>
      <div className={MarkAboutcss.row}>
        <p className={MarkAboutcss.text}>

          Yaklaşık 1 sene önce hosting şirketinde çalışmaya ve
          eğitim almaya başladım.Bu işe başladığım zaman sitelerin 
          ön yüzlerinin nasıl yapıldığı ve front-end developerın 
          ne olduğuna dair en ufak bir fikrim yoktu. Daha sonra yaptığım
          işin detaylarına girdikçe benim asıl keyif alabileceğim 
          mesleğin front-end developer olmak olduğunun farkına vardım.
          Bilgisayar başında bir şeyler araştırmak, bu araştırmaları 
          deneyimlemek ve bu deneyimlerle yeni bir şeyler üretmeyi 
          seviyorum. Bir yandan para kazanırken bir yandan da 
          sevdiğim işi yapabilecek olduğum için front-end developer 
          olmaya karar verdim.Bu mesleği yapabilmek için gerekli 
          olan donanımı birçok ücretsiz kaynaktan araştırma yaparak
          ve eğitim alarak kazanmaya çalışıyorum. Bu araştırmalara
          ve eğitimlere günümün yaklaşık 10 saatini ayırarak
          kendimi geliştiriyorum.Bu yolda çok ilerlediğimi 
          düşünüyorum ve ilerlemeye devam edeceğim.

        </p>
      </div>
      <div className={MarkAboutcss.additionalRow}>
        <p className={MarkAboutcss.text}> 

          Kocaeli Üniversitesi İngilizce-İktisat bölümü mezunuyum.
          25 yaşındayım ve kod yazmaktan çok keyif alıyorum.
          Öğrendiğim çoğu bilgiyi diğer front-end
          developerların paylaşımları ve yardımları sayesinde öğrendim.
          Bu yüzden ben de bu yolda öğrendiklerimi ve yaptığım işleri 
          diğer front-end developer arkadaşlarım için blog
          sayfamda paylaşıyorum. Web geliştirme alanında sorularınız
          için sosyal medya hesaplarımdan bana ulaşabilirsiniz.
          
        </p>
      </div>
    </div>
  )
}`;

  const syntaxHighlighterRef = useRef(null);
  const [input, setInput] = useState(defaultAbout);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    hljs.registerLanguage('javascript', javascript);
  }, []);

  useEffect(() => {
    if (syntaxHighlighterRef.current) {
      hljs.highlightBlock(syntaxHighlighterRef.current);
    }
  }, [input]);

  return (
    <div className={MarkAboutcss.container}>
      <div className={MarkAboutcss.editor}>
        <h2 className={MarkAboutcss.editor_head}>Editor</h2>
        <div className={MarkAboutcss.panel}><p>Example Code</p></div>
        <textarea
          autoFocus
          className={MarkAboutcss.textarea}
          value={input}
          onChange={handleInputChange}
        />
      </div>
      <div className={MarkAboutcss.preview}>
        <h2 className={MarkAboutcss.preview_head}>Preview</h2>
        <div className={MarkAboutcss.markdown}>
          <pre>
            <code
              ref={syntaxHighlighterRef}
              className="javascript hljs"
              style={syntaxHighlighterStyles}
            >
              {input}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default MarkdownAbout;
