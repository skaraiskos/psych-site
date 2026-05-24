import Form from '../common/Form';

import {
  IconMapPin,
  IconPhoneCall,
  IconMail,
  IconDeviceLaptop
} from '@tabler/icons-react';

const contactData = {
  title:
    'Επικοινωνία',
  items: [
    {
      type: "address",
      values: ['Αγίου Ιωάννου 63, Αγία Παρασκευή'],
      icon: IconMapPin,
    },
    {
      type: "address",
      values: ['Διαδικτυακά'],
      icon: IconDeviceLaptop,
    },
    {
      type: "phone",
      values: ['+30 6951780181'],
      icon: IconPhoneCall,
    },
    {
      type: "email",
      values: ['mavrogonatoupsych@gmail.com'],
      icon: IconMail,
    },
    {
      type: "description",
      values: ['Παρέχεται η δυνατότητα διεξαγωγής συνεδριών και σε συνεργαζόμενο Κέντρο Ψυχοθεραπείας στα Γλυκά Νερά']
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
            {contactData.items.map(({ type, values, icon: Icon }, index) => {
              const getHref = (value: string) => {
                if (type === "phone") return `tel:+30${value}`;
                if (type === "email") return `mailto:${value}`;
                return null;
              };

              const Wrapper = ({ children }: any) =>
                type === "phone" || type === "email" ? (
                  <a
                    href={getHref(values[0])!}
                    className="flex items-center gap-4 hover:opacity-80 transition"
                  >
                    {children}
                  </a>
                ) : (
                  <div className="flex items-center gap-4">{children}</div>
                );

              return (
                <li key={index} className="flex items-start gap-4 mb-4 py-3">

                  <Wrapper>
                    {/* ICON ONLY ONCE */}
                    {Icon && (
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-theme4 text-gray-50">
                        <Icon className="h-6 w-6" />
                      </div>
                    )}

                    {/* TEXT BLOCK */}
                    <div className="flex flex-col text-gray-600 leading-tight">
                      {values.map((value, i) => (
                        <span key={i}>
                          {type === "phone" ? `Κινητό: ${value}` : value}
                        </span>
                      ))}
                    </div>
                  </Wrapper>

                </li>
              );
            })}
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
