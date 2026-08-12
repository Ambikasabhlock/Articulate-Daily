import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Presentation, PresentationFile } from "@oai/artifact-tool";
import { buildSlide01 } from "./layouts/slide-01.mjs";
import { buildSlide02 } from "./layouts/slide-02.mjs";
import { buildSlide11 } from "./layouts/slide-11.mjs";
import { buildSlide13 } from "./layouts/slide-13.mjs";
import { buildSlide17 } from "./layouts/slide-17.mjs";

const packageRoot=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../..");
const out=path.join(packageRoot,"presentations","Articulate-Daily-Executive-Pitch-v3.03.pptx");
const preview=path.join(packageRoot,"work","pitch-deck","render");
await fs.mkdir(preview,{recursive:true});
const p=Presentation.create({slideSize:{width:1280,height:720}});

buildSlide01(p,{title:"ARTICULATE DAILY",title2:"Useful words become confident communication",title3:"A local-first daily learning companion · Version 3.03"});
buildSlide11(p,{title:"Vocabulary tools often stop before real use",footer1:"2",body1:{topic:"THE GAP",loremIpsumDolorSitAmetConsecteturAdipiscing:"Learners collect definitions but struggle to recall the right word in a meeting, message or conversation.",loremIpsumDolorSitAmetConsecteturAdipiscing2:"Progress becomes fragmented across notes, documents and disconnected practice."},body2:"COLLECTING",body3:"COMMUNICATING",body4:{detailGoesHere:"Long lists",detailGoesHere2:"Weak context",detailGoesHere3:"Little repetition"},body5:{detailGoesHere:"Relevant vocabulary",detailGoesHere2:"Personal examples",detailGoesHere3:"Daily retrieval"}});
buildSlide13(p,{title:"One focused product closes the loop",footer1:"3",body1:{titleGoesHere:"Capture",loremIpsumDolorSitAmetConsecteturAdipiscing:"Add words manually or from real documents."},body2:{titleGoesHere:"Understand",loremIpsumDolorSitAmetConsecteturAdipiscing:"Meaning, examples, collocations and distinctions."},body3:{titleGoesHere:"Practise",loremIpsumDolorSitAmetConsecteturAdipiscing:"Retrieval, sentences, quizzes and speech."},body4:{titleGoesHere:"Apply",loremIpsumDolorSitAmetConsecteturAdipiscing:"Bring clearer language into everyday communication."}});
buildSlide17(p,{title:"A daily loop turns intention into retention",footer1:"4",label1:"CAPTURE",label2:"PRACTISE",label3:"APPLY",body1:{titleHere:"Choose useful words",loremIpsumDolorSitAmetConsecteturAdipiscing:"From work, reading and conversation."},body2:{titleHere:"Recall in context",loremIpsumDolorSitAmetConsecteturAdipiscing:"Write, listen, speak and review."},body3:{titleHere:"Use them for real",loremIpsumDolorSitAmetConsecteturAdipiscing:"Meetings, messages and daily life."}});
buildSlide13(p,{title:"Seven connected experiences support the learner",footer1:"5",body1:{titleGoesHere:"Today + Add",loremIpsumDolorSitAmetConsecteturAdipiscing:"A clear plan and fast vocabulary capture."},body2:{titleGoesHere:"Extract + Library",loremIpsumDolorSitAmetConsecteturAdipiscing:"Turn materials into an organised personal resource."},body3:{titleGoesHere:"Practice + Coach",loremIpsumDolorSitAmetConsecteturAdipiscing:"Retrieval, writing, listening and structured speaking."},body4:{titleGoesHere:"Profiles + Settings",loremIpsumDolorSitAmetConsecteturAdipiscing:"Targets, backup, reports, accessibility and optional sync."}});
buildSlide11(p,{title:"Trust is designed into the operating model",footer1:"6",body1:{topic:"LOCAL-FIRST BY DEFAULT",loremIpsumDolorSitAmetConsecteturAdipiscing:"Core learning works without an account. Data saves immediately on the device, and portable backups keep the learner in control.",loremIpsumDolorSitAmetConsecteturAdipiscing2:"Cloud sync is optional rather than a condition of participation."},body2:"CONTROL",body3:"PROTECTION",body4:{detailGoesHere:"Exportable backups",detailGoesHere2:"Clear conflict choices",detailGoesHere3:"Two-step deletion"},body5:{detailGoesHere:"Per-user database rules",detailGoesHere2:"Validated imports",detailGoesHere3:"Bundled processing libraries"}});
buildSlide17(p,{title:"The architecture scales from one browser to many devices",footer1:"7",label1:"DEVICE",label2:"IDENTITY",label3:"SYNC",body1:{titleHere:"Local state",loremIpsumDolorSitAmetConsecteturAdipiscing:"Instant, resilient learning experience."},body2:{titleHere:"Optional account",loremIpsumDolorSitAmetConsecteturAdipiscing:"Email authentication through Supabase."},body3:{titleHere:"Protected row",loremIpsumDolorSitAmetConsecteturAdipiscing:"User-owned state with row-level security."}});
buildSlide02(p,{title:"ARTICULATE DAILY",title2:"NEXT STEP",title3:"Launch a focused beta, learn from real routines, then deepen the coaching experience"});

for(const [i,slide] of p.slides.items.entries()){const png=await p.export({slide,format:"png",scale:1});await fs.writeFile(`${preview}/slide-${String(i+1).padStart(2,"0")}.png`,new Uint8Array(await png.arrayBuffer()));const layout=await slide.export({format:"layout"});await fs.writeFile(`${preview}/slide-${String(i+1).padStart(2,"0")}.layout.json`,await layout.text());}
const montage=await p.export({format:"webp",montage:true,scale:1});await fs.writeFile(`${preview}/montage.webp`,new Uint8Array(await montage.arrayBuffer()));
const file=await PresentationFile.exportPptx(p);await file.save(out);console.log(out);
