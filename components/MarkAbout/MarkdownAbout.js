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

        Frontend Developer olarak çalışıyorum
        ve HTML, CSS, JavaScript gibi temel
        teknolojilerin yanı sıra React ve
        React Native gibi önemli teknolojilerde
        de deneyim sahibiyim.Müşterilerimle 
        aktif iletişim kurarak projeleri
        kişiselleştiriyor ve en iyi çözümleri 
        sunmaya odaklanıyorum. İşbirliği
        ve takım çalışmasına büyük önem veriyor,
        projelere katkı sağlamayı amaçlıyorum.
        
        Ayrıca, günlük hayatımda güncel teknolojik
        haberleri takip etmeyi ve kendi girişimim
        olan ve ortak ekibimle birlikte üzerinde 
        çalıştığım bir uygulamayı geliştirmekle
        ilgileniyorum.
        
        Şirketinizde veya projenizde birlikte
        çalışarak başarıya ulaşmayı hedefliyorum.
        Tutkulu bir Frontend Developer olarak,
        işinizi ileriye taşıyacak çözümler sunmak
        için buradayım. Daha fazla bilgi almak
        veya işbirliği fırsatlarını değerlendirmek
        için benimle iletişime geçmekten çekinmeyin.
        
        Görüşmek üzere!       

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
