import React from 'react';

import * as yup from 'yup';
import toast from 'react-hot-toast';
import { Formik, ErrorMessage, Field } from 'formik';
import { useEffect } from 'react';

const addPetFormSchema = yup.object().shape({
  title: yup.string().when('category', {
    is: category => category !== 'your pet',
    then: schema =>
      schema
        .min(2, 'Minimum 2 characters')
        .max(50, 'Maximum 50 characters')
        .required('Title is required (min 2, max 50 characters)'),
  }),

  category: yup
    .string()
    .oneOf(['your pet', 'sell', 'lost-found', 'for-free'])
    .required('Category is required'),

  name: yup
    .string()
    .min(2, 'Minimum 2 characters')
    .max(16, 'Maximum 16 characters')
    .matches(/^[a-zA-Z. ']+$/, 'not match the required pattern')
    .required('Name is required (min 2, max 16 characters)'),
  petBirthday: yup
    .string()
    .matches(/^\d{2}\.\d{2}\.\d{4}$/, 'DD.MM.YYYY format needed')
    .required('Pet Birthday is required (DD.MM.YYYY format)'),
  breed: yup
    .string('Must be a string')
    .min(2, 'Minimum 2 characters')
    .max(16, 'Maximum 16 characters')
    .required('Breed is required (min 2, max 16 characters)'),
  file: yup
    .mixed()
    .test('fileSize', 'File size is too large', value => value?.size <= 3145728)
    .test(
      'fileType',
      'Only image files are allowed',
      value =>
        !value || ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type)
    )
    .required('Photo is required'),
  sex: yup.string().when('category', {
    is: category =>
      category === 'sell' ||
      category === 'lost-found' ||
      category === 'for-free',
    then: schema =>
      schema.oneOf(['Female', 'Male']).required('Sex is required'),
  }),
  location: yup.string().when('category', {
    is: category => category !== 'your pet',
    then: schema =>
      schema
        .matches(/^[A-Z][a-zA-Z]*$/, 'City begins with capitalize character')
        .required('City is required'),
  }),
  price: yup.number().when('category', {
    is: category => category === 'sell',
    then: schema =>
      schema
        .moreThan(0, 'Price must be greater than 0')
        .required('Price is required'),
  }),
  comments: yup
    .string()
    .min(8, 'Minimum 8 characters')
    .max(120, 'Maximum 120 characters')
    .required('comments is required'),
});

export const AddPet = () => {
  const [step, setStep] = useState(1);

  const isPetOption = selectedOption === 'your pet';

  const dispatch = useDispatch();
  
  const status = isPetOption ? petStatus : postStatus;
const [selectedOption, setSelectedOption] = useState('');
  useEffect(() => {
    switch (status) {
      case 2:
        if (isPetOption) {
          dispatch(resetPetStatus());
          navigate('/user');
        } else {
          dispatch(resetStatus());
          navigate('/notices/my-pets');
        }
        break;

      case 3:
        if (isPetOption) {
          toast.error(petError);
          dispatch(());
        } else {
          toast.error(postError);
          dispatch(());
        }
        break;

      default:
        break;
    }
  }, []);



 return (
    <>
      <FormContainer>
        <Formik
          validationSchema={addPetFormSchema}
          initialValues={{
            name: '',
            petBirthday: '',
            breed: '',
            file: '',
            comments: '',
            title: '',
            sex: 'Female',
            avatar: '',
            price: 0,
          }}
          onSubmit={(values, { resetForm }) => {
            formSubmit(values);
          }}
        >
          {({ errors, touched, values }) => (
            <Forma
              style={{
                width:
                  !isMobile &&
                  step === 3 &&
                  selectedOption !== 'your pet' &&
                  (isDesktop ? '822px' : '702px'),
                padding:
                  !isMobile &&
                  step === 3 &&
                  selectedOption !== 'your pet' &&
                  (isDesktop ? '20px 75px' : '20px 32px'),
              }}
            >
              <div>
                <Title
                  style={{
                    textAlign:
                      step === 3 &&
                      selectedOption !== 'your pet' &&
                      screenWidth > 767
                        ? 'center'
                        : '',
                    marginLeft: '12px',
                  }}
                >
                  {step === 1
                    ? 'Add pet'
                    : selectedOption === 'sell'
                    ? 'Add pet for sell'
                    : selectedOption === 'lost-found'
                    ? 'Add lost pet'
                    : 'Add pet'}
                </Title>
                <Stepper style={{ marginBottom: '16px' }}>
                   <Step>
                    <p
                      style={{
                        color:
                          step === 1
                            ? '#54adff'
                            : values.category !== '' && !errors.category
                            ? '#00C3AD'
                            : '',
                      }}
                    >
                      Choose option
                    </p>
                    <StepLine
                      style={{
                        backgroundColor:
                          step === 1
                            ? '#54adff'
                            : values.category !== '' && !errors.category
                            ? '#00C3AD'
                            : '',
                      }}
                    />
                  </Step>
                  <Step>
                    <p
                      style={{
                        color:
                          step === 2
                            ? '#54adff'
                            : values.name !== '' &&
                              values.petBirthday !== '' &&
                              values.breed !== '' &&
                              !errors.name &&
                              !errors.petBirthday &&
                              !errors.breed
                            ? '#00C3AD'
                            : '',
                      }}
                    >
                      Personal details
                    </p>
                    <StepLine
                      style={{
                        backgroundColor:
                          step === 2
                            ? '#54adff'
                            : values.name !== '' &&
                              values.petBirthday !== '' &&
                              values.breed !== '' &&
                              !errors.name &&
                              !errors.petBirthday &&
                              !errors.breed
                            ? '#00C3AD'
                            : '',
                      }}
                    />
                  </Step>
                  <Step>
                    <p
                      style={{
                        color:
                          step === 3
                            ? '#54adff'
                            : values.comments !== '' && !errors.comments
                            ? '#00C3AD'
                            : '',
                      }}
                    >
                      More info
                    </p>
                    <StepLine
                      style={{
                        backgroundColor:
                          step === 3
                            ? '#54adff'
                            : values.file !== '' &&
                              values.comments !== '' &&
                              !errors.file &&
                              !errors.comments
                            ? '#00C3AD'
                            : '',
                      }}
                    />
                  </Step>
                </Stepper>
                {step === 1 && (
                  <div style={{ marginTop: '40px' }}>
                    <div>
                      <Option
                        htmlFor="option1"
                        style={{
                          backgroundColor:
                            selectedOption === 'your pet' ? '#54adff' : '',
                          color: selectedOption === 'your pet' ? '#fff' : '',
                        }}
                        onClick={() => setSelectedOption('your pet')}
                      >
                        <Field
                          style={{ appearance: 'none' }}
                          id="option1"
                          name="category"
                          type="radio"
                          value="your pet"
                        />
                        your pet
                      </Option>
                    </div>
                    <div>
                      <Option
                        htmlFor="option2"
                        style={{
                          backgroundColor:
                            selectedOption === 'sell' ? '#54adff' : '',
                          color: selectedOption === 'sell' ? '#fff' : '',
                        }}
                        onClick={() => setSelectedOption('sell')}
                      >
                        <Field
                          style={{ appearance: 'none' }}
                          id="option2"
                          name="category"
                          type="radio"
                          value="sell"
                        />
                        sell
                      </Option>
                    </div>
                    <div>
                      <Option
                        htmlFor="option3"
                        style={{
                          backgroundColor:
                            selectedOption === 'lost-found' ? '#54adff' : '',
                          color: selectedOption === 'lost-found' ? '#fff' : '',
                        }}
                        onClick={() => setSelectedOption('lost-found')}
                      >
                        <Field
                          style={{ appearance: 'none' }}
                          id="option3"
                          name="category"
                          value="lost-found"
                          type="radio"
                        />
                        lost/found
                      </Option>
                    </div>
                    <div>
                      <Option
                        htmlFor="option4"
                        style={{
                          backgroundColor:
                            selectedOption === 'for-free' ? '#54adff' : '',
                          color: selectedOption === 'for-free' ? '#fff' : '',
                        }}
                        onClick={() => setSelectedOption('for-free')}
                      >
                        <Field
                          style={{ appearance: 'none' }}
                          id="option4"
                          name="category"
                          value="for-free"
                          type="radio"
                        />
                        in good hands
                      </Option>
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div style={{ marginBottom: !isMobile && '36px' }}>
                    {selectedOption !== 'your pet' && (
                      <div
                        style={{ marginBottom: '7px', position: 'relative' }}
                      >
                        <InputTitle style={{ marginBottom: '8px' }}>
                          Title of add
                        </InputTitle>
                        <Input
                          name="title"
                          type="text"
                          autoComplete="off"
                          placeholder="Type title"
                          style={{
                            border:
                              touched.title &&
                              (errors.title
                                ? '1px solid #F43F5E'
                                : '1px solid #00C3AD'),
                          }}
                        />
                        <ErrorMessage component={ErrBox} name="title" />
                      </div>
                    )}
                    <div style={{ marginBottom: '7px', position: 'relative' }}>
                      <InputTitle style={{ marginBottom: '8px' }}>
                        Pet's name
                      </InputTitle>
                      <Input
                        name="name"
                        type="text"
                        autoComplete="off"
                        placeholder="Type pet name"
                        style={{
                          border:
                            touched.name &&
                            (errors.name
                              ? '1px solid #F43F5E'
                              : '1px solid #00C3AD'),
                        }}
                      />
                      <ErrorMessage component={ErrBox} name="name" />
                    </div>
                    <div style={{ marginBottom: '7px', position: 'relative' }}>
                      <InputTitle style={{ marginBottom: '8px' }}>
                        Date of birth
                      </InputTitle>
                      <Input
                        name="petBirthday"
                        type="text"
                        autoComplete="off"
                        placeholder="Type date of birth"
                        style={{
                          border:
                            touched.petBirthday &&
                            (errors.petBirthday
                              ? '1px solid #F43F5E'
                              : '1px solid #00C3AD'),
                        }}
                      />
                      <ErrorMessage component={ErrBox} name="petBirthday" />
                    </div>
                    <div style={{ marginBottom: '7px', position: 'relative' }}>
                      <InputTitle style={{ marginBottom: '8px' }}>
                        Breed
                      </InputTitle>
                      <Input
                        name="breed"
                        type="text"
                        autoComplete="off"
                        placeholder="Type breed"
                        style={{
                          border:
                            touched.breed &&
                            (errors.breed
                              ? '1px solid #F43F5E'
                              : '1px solid #00C3AD'),
                        }}
                      />
                      <ErrorMessage component={ErrBox} name="breed" />
                    </div>
                  </div>
                )}
                {step === 3 && <MoreInfo selectedOption={selectedOption} />}
              </div>
              <ButtonGroup
                style={{
                  justifyContent:
                    step === 3 && selectedOption !== 'your pet'
                      ? 'center'
                      : 'right',
                }}
              >
                {step === 1 && (
                  <CancelButton type="button" to="/notices/:categoryName">
                    <ArrowLeft style={{ marginRight: '16px' }} />
                    <ButtonText style={{ color: '#54ADFF' }}>Cancel</ButtonText>
                  </CancelButton>
                )}
                {step > 1 && (
                  <PrevStepButton type="button" onClick={handlePreviousStep}>
                    <ArrowLeft style={{ marginRight: '16px' }} />
                    <ButtonText style={{ color: '#54ADFF' }}>Back</ButtonText>
                  </PrevStepButton>
                )}
                {step < 3 && (
                  <NextStepButton
                    type="button"
                    onClick={() => handleNextStep(errors, values)}
                  >
                    <ButtonText>Next</ButtonText>
                    <Pawprint />
                  </NextStepButton>
                )}
                {step === 3 && (
                  <NextStepButton type="submit">
                    <ButtonText>{status !== 1 ? 'Done' : 'Loading'}</ButtonText>
                    <Pawprint />
                  </NextStepButton>
                )}
              </ButtonGroup>
            </Forma>
          )}
        </Formik>
      </FormContainer>
    </>
  );
};
