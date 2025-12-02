"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

export default function Accordion() {
  const items = [
    {
      title: "Psalm 23 (KJV) 12th Grade Reading Level",
      content:
        "The Lord is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters. He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake. Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me. Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over. Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the Lord for ever.",
      link: "https://www.biblegateway.com/passage/?search=Psalm%2023&version=KJV",
    },
    {
      title: "Psalm 23 (ESV) 10th Grade Reading level",
      content:
        "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul. He leads me in paths of righteousness for his name's sake. Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me. You prepare a table before me in the presence of my enemies; you anoint my head with oil; my cup overflows. Surely[d] goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the Lord forever.",
      link: "https://www.biblegateway.com/passage/?search=Psalm%2023&version=ESV",
    },
    {
      title: "Psalm 23 (NIV) 7-8th Grade Reading level",
      content:
        "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul. He guides me along the right paths for his name’s sake. Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me. You prepare a table before me in the presence of my enemies. You anoint my head with oil; my cup overflows. Surely your goodness and love will follow me all the days of my life, and I will dwell in the house of the Lord forever.",
      link: "https://www.biblegateway.com/passage/?search=Psalm%2023&version=NIV",
    },
    {
      title: "Psalm 23 (NLT) 6th Grade Reading level",
      content:
        "The Lord is my shepherd; I have all that I need. He lets me rest in green meadows; he leads me beside peaceful streams. He renews my strength. He guides me along right paths, bringing honor to his name. Even when I walk through the darkest valley, I will not be afraid, for you are close beside me. Your rod and your staff protect and comfort me. You prepare a feast for me in the presence of my enemies. You honor me by anointing my head with oil. My cup overflows with blessings. Surely your goodness and unfailing love will pursue me all the days of my life, and I will live in the house of the Lord forever.",
      link: "https://www.biblegateway.com/passage/?search=Psalm%2023&version=NLT",
    },
    {
      title: "Psalm 23 (NIrV) 3rd Grade Reading level",
      content:
        "The Lord is my shepherd. He gives me everything I need. He lets me lie down in fields of green grass. He leads me beside quiet waters. He gives me new strength. He guides me in the right paths for the honor of his name. Even though I walk through the darkest valley, I will not be afraid. You are with me. Your shepherd’s rod and staff comfort me. You prepare a feast for me right in front of my enemies. You pour oil on my head. My cup runs over. I am sure that your goodness and love will follow me all the days of my life. And I will live in the house of the Lord forever.",
      link: "https://www.biblegateway.com/passage/?search=Psalm%2023&version=NIRV",
    },
  ];

  return (
    <div className="w-full">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="mb-4 border border-gray-300 rounded-xl overflow-hidden"
        >
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between items-center px-4 py-3 text-left text-xl font-medium bg-stone-200 hover:bg-stone-400">
                  {item.title}
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180" : ""
                    } h-5 w-5 transition-transform`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel className="px-4 py-3 bg-white text-gray-700">
                  <p className="mb-3">{item.content}</p>
                  <a
                    href={item.link}
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Read this bible →
                  </a>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
}
