export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Blake Beus',
    role: 'App Security at JPMorgan Chase',
    text: "I can't believe that I used to run my business without Jumpshare. My clients are VERY impressed that I can quickly take videos, GIFs, and screenshots showing them what we need to do or give them feedback on project requirements.",
    image: '/blake.png',
  },
  {
    name: 'Qwantel Latay',
    role: 'Online Business Manager',
    text: 'Jumpshare is one of those "where have you been my whole life" tools. They combined tools that I\'d been using all into one cohesive little network when sharing files. Such a genius product, and I hope they stay around forever!',
    image: '/qwantel.png',
  },
  {
    name: 'Dave Baxter',
    role: 'Estate Agent at DBRealty',
    text: "Jumpshare saves me a ton of time and allows me to work on my schedule. Customers love getting detailed screencasts from me with a call-to-action link for appointments. It's a beautiful workflow. You cannot afford to NOT use Jumpshare.",
    image: '/dave.png',
  },
];
