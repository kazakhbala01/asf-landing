import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — ASF",
  robots: { index: false },
};

// TODO: согласовать текст с клиентом и дополнить реквизитами компании.
export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Политика конфиденциальности
        </h1>
        <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted">
          <p>
            Сайт Astana Soap Factory (ASF) является информационным. Мы не
            собираем и не храним персональные данные посетителей на сервере
            сайта.
          </p>
          <p>
            Форма заявки на сайте не отправляет данные на наш сервер: при
            нажатии кнопки «Отправить в WhatsApp» введённый вами текст
            передаётся в приложение WhatsApp на вашем устройстве, и вы сами
            решаете, отправлять ли сообщение. Обработка сообщений в WhatsApp
            регулируется политикой конфиденциальности WhatsApp.
          </p>
          <p>
            При обращении по телефону, WhatsApp, Telegram или e-mail вы
            добровольно передаёте нам контактные данные (имя, номер телефона),
            которые используются исключительно для ответа на ваш запрос,
            подготовки коммерческого предложения и организации поставки.
          </p>
          <p>
            Мы не передаём полученные данные третьим лицам, за исключением
            случаев, предусмотренных законодательством Республики Казахстан.
          </p>
          <p>
            По вопросам обработки данных пишите на
            {" "}
            <a href="mailto:astanasoapfactory@gmail.com" className="font-semibold text-ink underline">
              astanasoapfactory@gmail.com
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
