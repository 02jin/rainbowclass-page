import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  // 이미지 import 올바르게 처리
  const programs = [
    {
      icon: require('../assets/digital.png'),
      title: '디지털 교육',
      description: '스마트폰 활용부터 키오스크 사용까지, 일상생활에 필요한 디지털 교육'
    },
    {
      icon: require('../assets/health.png'),
      title: '건강 관리',
      description: '신체 활동과 건강한 생활습관을 위한 맞춤형 건강 교육'
    },
    {
      icon: require('../assets/hobby.png'),
      title: '취미 활동',
      description: '그림, 음악, 원예 등 다양한 취미 활동을 통한 즐거운 여가 생활'
    }
  ];

  const notices = [
    {
      title: '2024년 상반기 프로그램 참가자 모집',
      date: '2024.01.15'
    },
    {
      title: '디지털 기초 교육 참가자 추가 모집',
      date: '2024.01.10'
    },
    {
      title: '건강 체조 프로그램 시간 변경 안내',
      date: '2024.01.05'
    }
  ];

  const galleryImages = Array.from({length: 4}, (_, i) => ({
    src: require(`../assets/photo${i + 1}.jpeg`),
    alt: `활동사진 ${i + 1}`
  }));

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>무지개청춘교실</h1>
          <p>활기찬 노년을 위한 맞춤형 교육 프로그램</p>
          <div className="hero-buttons">
            <Link to="/introduction" className="primary-btn">프로그램 소개</Link>
            <Link to="/announcements" className="secondary-btn">공지사항</Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs">
        <h2>교육 프로그램</h2>
        <p className="section-desc">무지개청춘교실에서 제공하는 다양한 교육 프로그램을 만나보세요</p>
        
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <div className="program-icon">
                <img src={program.icon} alt={program.title} />
              </div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <h2>활동 모습</h2>
        <p className="section-desc">무지개청춘교실의 다양한 활동 모습을 살펴보세요</p>
        
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </section>

      {/* Notice Section */}
      <section className="notice">
        <h2>공지사항</h2>
        <div className="notice-content">
          <div className="notice-list">
            {notices.map((notice, index) => (
              <Link key={index} to="/announcements" className="notice-item">
                <span className="notice-title">{notice.title}</span>
                <span className="notice-date">{notice.date}</span>
              </Link>
            ))}
          </div>
          <Link to="/announcements" className="more-btn">더보기</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;