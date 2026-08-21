import TextBlock from "@/components/TextBlock";


function Education() {
	return (
		<section id="education" className="scroll-mt-24">
			<h1>Education History</h1>
			<div className="flex justify-between">
				<TextBlock
					title="Palm Beach Central High School"
					degree="High School Diploma"
					years="2019-2023"
				>
					<ul>
						<li className="font-timesnewroman">
							Obtained AICE Diploma and got the Florida Bright
							Futures Scholarship.
						</li>
						<li>
							Moved to Orlando from West Palm Beach at 18 years
							old and started at Valencia College.
						</li>
					</ul>
					<br />
				</TextBlock>

				<TextBlock
					title="Valencia College"
					degree="Associates Degree: Articulated Computer
					Science Degree"
					years="2023-2025"
				>
					<ul>
						<li>
							Obtained an Arituclated A.S in Computer Science
							while working full-time.
						</li>
						<li>
							Transferred to UCF via the DirectConnect program.
						</li>
					</ul>
				</TextBlock>

				<TextBlock
					title="University of Central Florida"
					degree="Bachelor's Degree: Computer Science"
				>
					<ul>
						<li className="">
							Currently pursuing my bachelor's degree here.
						</li>
						<li>
							I intend to take up a minor in math and engineering
							in the near future
						</li>
						<li>
							I participate in the Hack@UCF and KnightHacks club,
							and look forward to joining the Satalite club. Avid
							participant of KnightHacks hackathons and other
							events posted by computer clubs.
						</li>
					</ul>
				</TextBlock>

				<TextBlock
					title="The Future..."
					degree="Masters, PHD"
					years="2028-onward"
				>
					In the future I'd love to pursue a masters or even a
					doctorate somewhere in the computer science field. Although
					I'm not 100% where I'll take it, I know my love for
					computers will land me here eventually.
				</TextBlock>
			</div>
		</section>
	);
}

export default Education;
