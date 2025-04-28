import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  LocationOn, 
  Phone, 
  Email,
  WhatsApp,
  Facebook,
  Instagram,
  YouTube,
  LinkedIn
} from '@mui/icons-material';

const Container = styled.div`
  width: 100%;
`;

const HeroSection = styled.div`
  height: 40vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/contact-hero.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(30px)'};
  transition: opacity 0.8s ease, transform 0.8s ease;
  ${mobile({ fontSize: "36px" })}
`;

const ContentSection = styled.div`
  padding: 80px 0;
  background-color: #f9f9f9;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  ${mobile({ 
    gridTemplateColumns: "1fr",
    gap: "40px"
  })}
`;

const ContactInfo = styled.div`
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateX(0)' : 'translateX(-30px)'};
  transition: opacity 0.7s ease, transform 0.7s ease;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
  color: #333;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #8e262f;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateX(0)' : 'translateX(-20px)'};
  transition: opacity 0.5s ease, transform 0.5s ease;
  transition-delay: ${props => `${0.2 + props.index * 0.1}s`};
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: #8e262f;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 20px;
  flex-shrink: 0;
`;

const InfoContent = styled.div``;

const InfoTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 8px;
`;

const InfoText = styled.p`
  color: #666;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  margin-top: 40px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(20px)'};
  transition: opacity 0.7s ease, transform 0.7s ease;
  transition-delay: 0.5s;
`;

const SocialTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  background-color: #8e262f;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(15px)'};
  transition: transform 0.5s ease, background-color 0.3s ease, opacity 0.5s ease;
  transition-delay: ${props => `${0.5 + props.index * 0.1}s`};
  
  &:hover {
    transform: translateY(-3px);
    background-color: #333;
  }
`;

const FormContainer = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateX(0)' : 'translateX(30px)'};
  transition: opacity 0.7s ease, transform 0.7s ease;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(15px)'};
  transition: opacity 0.5s ease, transform 0.5s ease;
  transition-delay: ${props => `${0.1 + props.index * 0.07}s`};
`;

const Label = styled.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #8e262f;
  }
`;

const Select = styled.select`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #8e262f;
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #8e262f;
  }
`;

const SubmitButton = styled.button`
  padding: 15px 30px;
  background-color: #8e262f;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(15px)'};
  transition: opacity 0.5s ease, transform 0.5s ease, background-color 0.3s ease;
  transition-delay: 0.5s;
  
  &:hover {
    background-color: #333;
  }
`;

const MapSection = styled.div`
  margin-top: 80px;
  height: 400px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(30px)'};
  transition: opacity 0.7s ease, transform 0.7s ease;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    product: '',
    message: ''
  });
  const [visibleElements, setVisibleElements] = useState({});
  
  const heroTitleRef = useRef(null);
  const contactInfoRef = useRef(null);
  const infoItemRefs = useRef([]);
  const socialLinksRef = useRef(null);
  const socialIconRefs = useRef([]);
  const formContainerRef = useRef(null);
  const inputGroupRefs = useRef([]);
  const submitButtonRef = useRef(null);
  const mapSectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.dataset.id;
          setVisibleElements(prev => ({ ...prev, [id]: true }));
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe hero title
    if (heroTitleRef.current) {
      heroTitleRef.current.dataset.id = 'heroTitle';
      observer.observe(heroTitleRef.current);
    }

    // Observe contact info section
    if (contactInfoRef.current) {
      contactInfoRef.current.dataset.id = 'contactInfo';
      observer.observe(contactInfoRef.current);
    }

    // Observe info items
    infoItemRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.id = `infoItem-${index}`;
        observer.observe(ref);
      }
    });

    // Observe social links
    if (socialLinksRef.current) {
      socialLinksRef.current.dataset.id = 'socialLinks';
      observer.observe(socialLinksRef.current);
    }

    // Observe social icons
    socialIconRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.id = `socialIcon-${index}`;
        observer.observe(ref);
      }
    });

    // Observe form container
    if (formContainerRef.current) {
      formContainerRef.current.dataset.id = 'formContainer';
      observer.observe(formContainerRef.current);
    }

    // Observe input groups
    inputGroupRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.id = `inputGroup-${index}`;
        observer.observe(ref);
      }
    });

    // Observe submit button
    if (submitButtonRef.current) {
      submitButtonRef.current.dataset.id = 'submitButton';
      observer.observe(submitButtonRef.current);
    }

    // Observe map section
    if (mapSectionRef.current) {
      mapSectionRef.current.dataset.id = 'mapSection';
      observer.observe(mapSectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <Container>
      <Navbar />
      
      <HeroSection>
        <HeroTitle ref={heroTitleRef} isVisible={visibleElements.heroTitle}>Contact Us</HeroTitle>
      </HeroSection>
      
      <ContentSection>
        <Wrapper>
          <ContactInfo ref={contactInfoRef} isVisible={visibleElements.contactInfo}>
            <Title>Get in touch</Title>
            <Subtitle>
              Have questions about our products? Fill out the contact form or email us and we will get back to you as soon as possible!
            </Subtitle>
            
            <InfoItem 
              ref={el => infoItemRefs.current[0] = el} 
              isVisible={visibleElements['infoItem-0']} 
              index={0}
            >
              <IconWrapper>
                <LocationOn />
              </IconWrapper>
              <InfoContent>
                <InfoTitle>Address</InfoTitle>
                <InfoText>Eastern Bypass Oppsite Shell Petrol Station</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem 
              ref={el => infoItemRefs.current[1] = el} 
              isVisible={visibleElements['infoItem-1']} 
              index={1}
            >
              <IconWrapper>
                <Phone />
              </IconWrapper>
              <InfoContent>
                <InfoTitle>Phone</InfoTitle>
                <InfoText>+254 795683399</InfoText>
                {/* <InfoText>+254 728976780</InfoText> */}
              </InfoContent>
            </InfoItem>
            
            <InfoItem 
              ref={el => infoItemRefs.current[2] = el} 
              isVisible={visibleElements['infoItem-2']} 
              index={2}
            >
              <IconWrapper>
                <Email />
              </IconWrapper>
              <InfoContent>
                <InfoTitle>Email</InfoTitle>
                <InfoText>info@marplewoodproducts.co.ke</InfoText>
                {/* <InfoText>customercare@woodproductskenya.co.ke</InfoText> */}
              </InfoContent>
            </InfoItem>
            
            <SocialLinks ref={socialLinksRef} isVisible={visibleElements.socialLinks}>
              <SocialTitle>Follow us to stay updated</SocialTitle>
              <SocialIcons>
                <SocialIcon 
                  ref={el => socialIconRefs.current[0] = el} 
                  isVisible={visibleElements['socialIcon-0']} 
                  index={0}
                  href="#" 
                  target="_blank"
                >
                  <WhatsApp />
                </SocialIcon>
                <SocialIcon 
                  ref={el => socialIconRefs.current[1] = el} 
                  isVisible={visibleElements['socialIcon-1']} 
                  index={1}
                  href="#" 
                  target="_blank"
                >
                  <Facebook />
                </SocialIcon>
                <SocialIcon 
                  ref={el => socialIconRefs.current[2] = el} 
                  isVisible={visibleElements['socialIcon-2']} 
                  index={2}
                  href="#" 
                  target="_blank"
                >
                  <Instagram />
                </SocialIcon>
                <SocialIcon 
                  ref={el => socialIconRefs.current[3] = el} 
                  isVisible={visibleElements['socialIcon-3']} 
                  index={3}
                  href="#" 
                  target="_blank"
                >
                  <YouTube />
                </SocialIcon>
                <SocialIcon 
                  ref={el => socialIconRefs.current[4] = el} 
                  isVisible={visibleElements['socialIcon-4']} 
                  index={4}
                  href="#" 
                  target="_blank"
                >
                  <LinkedIn />
                </SocialIcon>
              </SocialIcons>
            </SocialLinks>
          </ContactInfo>
          
          <FormContainer ref={formContainerRef} isVisible={visibleElements.formContainer}>
            <FormTitle>Request for a quote</FormTitle>
            <Form onSubmit={handleSubmit}>
              <InputGroup 
                ref={el => inputGroupRefs.current[0] = el} 
                isVisible={visibleElements['inputGroup-0']} 
                index={0}
              >
                <Label>Name</Label>
                <Input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
              
              <InputGroup 
                ref={el => inputGroupRefs.current[1] = el} 
                isVisible={visibleElements['inputGroup-1']} 
                index={1}
              >
                <Label>Mobile Number</Label>
                <Input 
                  type="tel" 
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
              
              <InputGroup 
                ref={el => inputGroupRefs.current[2] = el} 
                isVisible={visibleElements['inputGroup-2']} 
                index={2}
              >
                <Label>Email</Label>
                <Input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
              
              <InputGroup 
                ref={el => inputGroupRefs.current[3] = el} 
                isVisible={visibleElements['inputGroup-3']} 
                index={3}
              >
                <Label>Product Interested In</Label>
                <Select 
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a product</option>
                  <option value="doors">Doors</option>
                  <option value="floors">Floors</option>
                  <option value="kitchens">Kitchens</option>
                  <option value="wardrobes">Wardrobes</option>
                  <option value="accesories">Service</option>
                  <option value="other">Other</option>
                </Select>
              </InputGroup>
              
              <InputGroup 
                ref={el => inputGroupRefs.current[4] = el} 
                isVisible={visibleElements['inputGroup-4']} 
                index={4}
              >
                <Label>Please send us your drawings/measurements/details below:</Label>
                <TextArea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
              
              <SubmitButton 
                type="submit"
                ref={submitButtonRef}
                isVisible={visibleElements.submitButton}
              >
                Submit
              </SubmitButton>
            </Form>
          </FormContainer>
        </Wrapper>
        
        <MapSection ref={mapSectionRef} isVisible={visibleElements.mapSection}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7799999999997!2d36.92448194739931!3d-1.1545981005660528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11b9d5555555%3A0x9999999999999999!2sMarple%20Wood%20Products!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Marple Wood Products Location Map"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MapSection>
      </ContentSection>
      
      <Footer />
    </Container>
  );
};

export default Contact; 