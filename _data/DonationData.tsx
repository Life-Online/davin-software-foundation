import { DonationProps } from "../models/shared.model";

const DonationData: DonationProps = {
  sectionTitle: {
    sectionTag: "Donate",
    title: "Let’s Help Others",
    text: "Davin Software Foundation is building a community that is ever-growing and ever-willing to lend a hand to others through the use of technology.",
    titleSize: "header1",
  },
  campaigns: [
    {
      title: "A visit to Ikosi Schools",
      body: "We will be teaching young boys and girls in Ikosi how to write Java",
      id: 3,
      date: "2022-01-22",
      imageURL: "/img/campaign-ikosi.png",
    },
    {
      title: "A visit to Vigilant Heart Charitable Society",
      body: "We will be teaching young boys and girls in Ikosi how to write Java",
      id: 1,
      date: "2022-04-16",
      imageURL: "/img/campaign-obalende.png",
    },
    {
      title: "A visit to Ketu Schools",
      body: "We will be teaching young boys and girls in Ikosi how to write Java",
      id: 2,
      date: "2022-06-05",
      imageURL: "/img/campaign-ketu.png",
    },
    {
      title: "A visit to Ketu Schools",
      body: "We will be teaching young boys and girls in Ikosi how to write Java",
      id: 2,
      date: "2022-06-05",
      imageURL: "/img/campaign-ketu.png",
    },
  ],
  donationOptions: [5000, 10000, 25000, 50000, 100000, 250000],
};

export default DonationData;
