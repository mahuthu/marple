import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import Navbar from '../components/Navbar';
// import Announcement1 from '../components/Announcement';
import Footer from '../components/Footer';
import { 
  LocationOn, 
  Phone, 
  Email,
  WhatsApp,
  Facebook,
  Instagram,
  YouTube
} from '@mui/icons-material';
// import { Announcement } from '@material-ui/icons';

// TikTok icon component since it's not in Material UI
const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const Container = styled.div`
  width: 100%;
`;

const HeroSection = styled.div`
  height: 40vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/contact.webp');
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
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  letter-spacing: 1px;
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
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  letter-spacing: 1px;
  
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
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  letter-spacing: 0.3px;
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
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  letter-spacing: 0.5px;
`;

const InfoText = styled.p`
  color: #666;
  line-height: 1.6;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  letter-spacing: 0.3px;
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
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  letter-spacing: 0.5px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
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
  background-color: ${props => props.bgColor || '#8e262f'};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
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
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  letter-spacing: 1px;
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
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  letter-spacing: 0.3px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  letter-spacing: 0.3px;
  
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
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  letter-spacing: 0.3px;
  
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
      {/* <Announcement1/> */}

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
                <InfoText>info@maplewoodproducts.co.ke</InfoText>
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
                  href="https://wa.me/254795683399" 
                  target="_blank"
                  rel="noopener noreferrer"
                  bgColor="#25D366"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon />
                </SocialIcon>
                {/* <SocialIcon 
                  ref={el => socialIconRefs.current[1] = el} 
                  isVisible={visibleElements['socialIcon-1']} 
                  index={1}
                  href="https://facebook.com/Maple_Wood_Products" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook />
                </SocialIcon> */}
                <SocialIcon 
                  ref={el => socialIconRefs.current[2] = el} 
                  isVisible={visibleElements['socialIcon-2']} 
                  index={2}
                  href="https://instagram.com/Maple_Wood_Products" 
                  target="_blank"
                  rel="noopener noreferrer"
                  bgColor="#E1306C"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </SocialIcon>
                {/* <SocialIcon 
                  ref={el => socialIconRefs.current[3] = el} 
                  isVisible={visibleElements['socialIcon-3']} 
                  index={3}
                  href="https://youtube.com/Maple_Wood_Products" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTube />
                </SocialIcon> */}
                <SocialIcon 
                  ref={el => socialIconRefs.current[4] = el} 
                  isVisible={visibleElements['socialIcon-4']} 
                  index={4}
                  href="https://tiktok.com/@Maple_Wood_Products" 
                  target="_blank"
                  rel="noopener noreferrer"
                  bgColor="#000000"
                  aria-label="TikTok"
                >
                  <TikTokIcon />
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
            title="Maple Wood Products Location Map"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MapSection>
      </ContentSection>
      
      <Footer />
    </Container>
  );
};

export default Contact; 