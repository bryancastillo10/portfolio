import SectionHeader from "@/app/(reusables)/SectionHeader";
import ContactForm from "@/app/contact/ContactForm";
import ContactCard from "@/app/contact/ContactCard";

const Contact = () => {
  return (
    <section className='p-4'>
      <div className="max-w-[88%] mx-auto container">
        <SectionHeader title="Send Me A Message"/>
        <article className="mt-10 grid grid-cols-1 xl:grid-cols-2 gap-4">
          <ContactForm/>
          <ContactCard/>
        </article>

      </div>
    </section>
  )
}

export default Contact;
