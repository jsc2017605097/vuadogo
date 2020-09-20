import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        content: 'Chất lượng gỗ khá tốt, mình mua thấy ở đây giá cả hợp lí mà gỗ lại đẹp, dịch vụ chắm sóc khách hàng thì nhiệt tình, nói chung mình rất tin tưởng Vua Đồ Gỗ.',
        img:
            'https://lh3.googleusercontent.com/proxy/_N9dZueOMDcI1BCzPXfAs7gidnpm_bh786bJEETpqqFp71hihBY81_e1o2MAIkrgzD321ghozj9U6t-E8fgK6SKPHcIOMgqEoYzXBNneXEC3r-pvvbA2ydEoMsJSWw',
    },
    {
        content: 'Bird',
        img:
            'https://techcrunch.com/wp-content/uploads/2016/09/2016_01_23_weebly_45251web.jpg?w=730&crop=1',
    },
    {
        content: 'Bali, Indonesia',
        img:
            'https://techcrunch.com/wp-content/uploads/2016/09/2016_01_23_weebly_45251web.jpg?w=730&crop=1',
    },
    {
        content: 'NeONBRAND Digital Marketing, Las Vegas, United States',
        img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKRlKoajg43IQzYuAfQ_hcvvgDfwe9aELgbQ&usqp=CAU',
    },
    {
        content: 'Goč, Serbia',
        img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwkGHpKT4paJEpRfUhkH9SbBWNmKYZneIKgw&usqp=CAU',
    },
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
                                <blockquote style={{textAlign:"center"}}>{'"' + step.content + '"'}</blockquote>
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