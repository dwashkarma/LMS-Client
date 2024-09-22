import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
type Props = {};

export default function AccordionComponent({}: Props) {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <div className="flex justify-between w-full font-semibold">
            <p>Intoduction</p>
            <div className="flex gap-20">
              <p>3 chapters</p>
              <p className="timeFrame">2 hours</p>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <div className="flex justify-between w-full font-semibold">
            <p>Quiz</p>
            <div className="flex gap-20">
              <p>4 chapters</p>
              <p className="timeFrame">1 hours</p>
            </div>
          </div>{" "}
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <div className="flex justify-between w-full font-semibold">
            <p>Basis of learning</p>
            <div className="flex gap-20">
              <p>2 chapters</p>
              <p className="timeFrame">1 hours</p>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
