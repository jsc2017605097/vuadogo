import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import img1 from './khach_hang1.webp'
import img2 from './khach_hang2.webp'
import img3 from './khach_hang3.webp'
import img4 from './khach_hang4.webp'
import img5 from './khach_hang5.webp'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        content: 'Anh Phong: Chất lượng gỗ khá tốt, mình mua thấy ở đây giá cả hợp lí mà gỗ lại đẹp.',
        img: img1
    },
    {
        content: 'Anh Nam: Hỗ trợ nhiệt tình, hàng chất lượng, mình sẽ giới thiệu cho nhiều người biết đến VUA ĐỒ GỖ hơn.',
        img: img2
    },
    {
        content: 'Chị Hòa: Bây giờ mình mới biết đến VUA ĐỒ GỖ, thật tiếc vì không biết sớm hơn, chất lượng quá tốt, tư vấn nhiệt tình.',
        img: img3
    },
    {
        content: 'Chị Linh: Cửa hàng này nhiều đỗ gỗ sịn thật, chỉ muốn mua hết mang về thôi.',
        img: img4
    },
    {
        content: 'Chị Anh: Tôi hài lòng với sản phẩm ở đây, gỗ chất lượng tốt, thiết kế đẹp cho khách.',
        img: img5
    }
];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

function SwipeableTextMobileStepper() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div className={classes.root}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {tutorialSteps.map((step, index) => (
                    <div key={index}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img alt={step.img} src={step.img} width="150px" style={{ borderRadius: "50%" }} />
                                <blockquote style={{ textAlign: "center" }}>{'"' + step.content + '"'}</blockquote>
                            </div>
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
                }
            />
        </div>
    );
}

export default SwipeableTextMobileStepper;