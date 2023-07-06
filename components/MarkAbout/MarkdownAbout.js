import React, { useState } from 'react';
import MarkAboutcss from '../../styles/MarkdownAbout.module.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

function MarkdownAbout() {
  const [input, setInput] = useState(defaultAbout);
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={MarkAboutcss.container}>
      <div className={MarkAboutcss.editor}>
        <h2>Editor</h2>
        <textarea autoFocus className={MarkAboutcss.textarea} value={input} onChange={handleInputChange} />
      </div>
      <div className={MarkAboutcss.preview}>
        <h2 className={MarkAboutcss.preview_head}>Preview</h2>
        <div className={MarkAboutcss.markdown}>
          <ReactMarkdown>{input}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

const defaultAbout = `# Merhaba Ben Emir!

Yaklaşık 1 sene önce hosting şirketinde çalışmaya ve eğitim almaya başladım. 
Bu işe başladığım zaman sitelerin ön yüzlerinin nasıl yapıldığı ve front-end developerın ne 
olduğuna dair en ufak bir fikrim yoktu. Daha sonra yaptığım işin detaylarına girdikçe benim asıl keyif
alabileceğim mesleğin front-end developer olmak olduğunun farkına vardım. Bilgisayar başında bir şeyler
araştırmak, bu araştırmaları deneyimlemek ve bu deneyimlerle yeni bir şeyler üretmeyi seviyorum. 
Bir yandan para kazanırken bir yandan da sevdiğim işi yapabilecek olduğum için front-end developer olmaya karar verdim.
Bu mesleği yapabilmek için gerekli olan donanımı birçok ücretsiz kaynaktan araştırma yaparak ve eğitim alarak kazanmaya çalışıyorum. 
Bu araştırmalara ve eğitimlere günümün yaklaşık 10 saatini ayırarak kendimi geliştiriyorum.
Bu yolda çok ilerlediğimi düşünüyorum ve ilerlemeye devam edeceğim.

Kocaeli Üniversitesi İngilizce-İktisat bölümü mezunuyum. 25 yaşındayım ve kod yazmaktan çok keyif alıyorum.
Öğrendiğim çoğu bilgiyi diğer front-end developerların paylaşımları ve yardımları sayesinde öğrendim.
Bu yüzden ben de bu yolda öğrendiklerimi ve yaptığım işleri diğer front-end developer arkadaşlarım için blog
sayfamda paylaşıyorum. Web geliştirme alanında sorularınız için sosyal medya hesaplarımdan bana ulaşabilirsiniz.
`;

export default MarkdownAbout;
