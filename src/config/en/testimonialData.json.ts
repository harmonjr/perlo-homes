import { type TestimonialItem } from "../types/configDataTypes";

import AshleyMoore from "@images/Ashley-Moore.jpg";
import AshleyBoneske from "@images/Ashley-Boneske.jpg";
import JenniferSnyder from "@images/Jennifer-snyder.png";
import EmmaNagy from "@images/emma-nagy.png";

export const testimonialData: TestimonialItem[] = [
	{
		avatar: AshleyMoore,
		name: "Ashley Moore",
		title: "Real Estate Agent",
		testimonial: `We have always had the best experience with Wade in every project he has done for us. His knowledge of construction, and ability to take a vision and make it reality far surpasses others. We highly recommend him for any home construction, remodel, addition needs that you have.
      `,
	},
	{
		avatar: AshleyBoneske,
		name: "Ashley Boneske",
		title: "Happy Customer",
		testimonial: `Wade Nagy with Perlo Homes is one of the most knowledgeable builders I know. His skills are top notch and his work ethic is too. He always worked with us on any issues we had to make sure we were pleased with the quality, timeline and even materials used. I recommend him to anyone who needs a builder - or just needs help with home improvement projects in general. He’s my go-to and he will be yours, too, once you shake his hand. Perlo Homes is one of the best.
      `,
	},
	{
		avatar: JenniferSnyder,
		name: "Jennifer Snyder",
		title: "Happy Customer",
		testimonial: `Wade Nagy with Perlo Homes is one of the most knowledgeable builders I know. His skills are top notch and his work ethic is too. He always worked with us on any issues we had to make sure we were pleased with the quality, timeline and even materials used. I recommend him to anyone who needs a builder - or just needs help with home improvement projects in general. He’s my go-to and he will be yours, too, once you shake his hand. Perlo Homes is one of the best.
      `,
	},

	{
		avatar: EmmaNagy,
		name: "Emma Nagy",
		title: "Family Member",
		testimonial: `HIGHLY recommend. He pours so much time and hard work into whatever project. But most importantly he does it all out of love for the customer and prioritizes giving the customer the best service!!!!
      `,
	},
	
];

export default testimonialData;