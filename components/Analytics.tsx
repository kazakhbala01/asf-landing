import Script from "next/script";

/**
 * Слоты аналитики. Активируются автоматически, когда в Vercel
 * (Settings → Environment Variables) появятся ID от клиента:
 *   NEXT_PUBLIC_GA_ID        — Google Analytics 4 (G-XXXXXXX)
 *   NEXT_PUBLIC_YM_ID        — Яндекс Метрика (номер счётчика)
 *   NEXT_PUBLIC_META_PIXEL_ID — Meta Pixel
 * TODO: запросить ID у клиента; Bitrix24-виджет и онлайн-чат добавить сюда же.
 */
export default function Analytics() {
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  const ym = process.env.NEXT_PUBLIC_YM_ID;
  const pixel = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <>
      {ga && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}');`}
          </Script>
        </>
      )}
      {ym && (
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');ym(${ym},'init',{clickmap:true,trackLinks:true,accurateTrackBounce:true});`}
        </Script>
      )}
      {pixel && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixel}');fbq('track','PageView');`}
        </Script>
      )}
    </>
  );
}
