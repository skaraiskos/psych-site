import Form from '../common/Form';

import {
  IconMapPin,
  IconPhoneCall,
  IconMail,
} from '@tabler/icons-react';

const contactData = {
  title:
    'Επικοινωνία',
  items: [
    {
      description: ['Δια Ζώσης: Αγίου Ιωάννου 63, Αγία Παρασκευή', 'Διαδικτυακά'],
      icon: IconMapPin,
    },
    {
      description: ['Κινητό: 6951780181'],
      icon: IconPhoneCall,
    },
    {
      description: ['mavrogonatoupsych@gmail.com'],
      icon: IconMail,
    },
  ],
  form: {
    title: 'Περιγράψτε την ανάγκη σας',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Όνοματεπώνυμο',
      },
      {
        type: 'email',
        name: 'mail',
        autocomplete: 'on',
        placeholder: 'mail',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Περιγραφή',
    },
    btn: {
      title: 'Αποστολή',
      type: 'submit' as const,
    },
  },
};

const Contact = () => (
  <section
    className="relative not-prose scroll-mt-[72px] mx-auto max-w-7xl px-6 py-12"
    id=""
  >
    <div className="flex items-center md:items-stretch justify-center">
      <div className="grid w-full md:grid-cols-2 gap-4 lg:gap-8 min-w-0">
        
        {/* Left list, centered */}
        <div className="h-full md:pr-12 md:pl-4 flex flex-col justify-center items-center md:text-base text-sm">
          <ul className="mb-6 md:mb-0">
            {contactData.items?.map(({ description, icon: Icon }, index) => (
              <li key={`item-contact-${index}`} className="flex items-center gap-4 mb-4 py-3 min-w-0">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-theme4 text-gray-50">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <div className="flex-1 min-w-0">
                  {typeof description === 'string' ? (
                    <p className="text-gray-600 leading-tight">{description}</p>
                  ) : (
                    description?.map((desc, i) => (
                      <p key={`desc-${i}`} className="text-gray-600 leading-tight">
                        {desc}
                      </p>
                    ))
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <Form
          {...contactData.form}
          containerClass="rounded-3xl backdrop-blur bg-theme5 shadow px-6 py-8 w-full max-w-full md:max-w-4xl md:p-12 box-border overflow-hidden"
          titleClass="mb-4"
          buttonClass="mt-2 w-fit mx-auto px-6 py-2.5 bg-theme7 text-white rounded-3xl transition-transform duration-300 hover:scale-105"
          btnPosition="center"
        />
      </div>
    </div>
  </section>


);

export default Contact;
