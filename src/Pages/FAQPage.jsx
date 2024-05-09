import React from 'react';
import { FaArrowRight } from "react-icons/fa";

function FAQPage(props) {
    return (
        <div>
            <div className='MainHero' style={{backgroundColor:'#ccd5e2', padding:'100px 0'}}>
                <div className='container'>
                    <div className='HeroSec' style={{ color:'black',textTransform:'capitalize'}}>
                        <div className='title text-center'>
                            <h2 style={{fontWeight:'400', fontSize:'60px',}}>FAQ</h2>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize:'18px'}}>
                                <a href='/' style={{textDecoration:'none', marginRight: '5px'}}>Home</a>
                                <span>//</span>
                                <span className='carts'> FAQ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-4' style={{ margin: 'auto', maxWidth: '60%' }}>
                <div className='panelArea my-4'>
                    <h4 style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    Below are frequently asked questions, you may find the answer for yourself
                    </h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat sagittis,
                    faucibus metus malesuada, eleifend turpis. Mauris semper augue id nisl aliquet, a porta
                    lectus mattis. Nulla at tortor augue. In eget enim diam. Donec gravida tortor sem, ac
                    fermentum nibh rutrum sit amet. Nulla convallis mauris vitae congue consequat. Donec
                    interdum nunc purus, vitae vulputate arcu fringilla quis. Vivamus iaculis euismod dui.
                    </p>
                    <div className='panel-group my-4' id='accordion'>
                        <div className='panel panel-default' style={{border:'1px solid #ebebeb'}}>
                            <div className='panel-heading px-2' style={{background:'#ebebeb'}}>
                                <button
                                    className='btn panel-title btn-link text-left d-flex align-items-center justify-content-between border-0 py-4 px-0'
                                    data-bs-toggle='collapse'
                                    data-bs-target='#collapse1'
                                    aria-expanded='false'
                                    aria-controls='collapse1'
                                    style={{display: 'flex',justifyContent:'space-between', width:'100%', textDecoration:'none', fontSize:'16px', fontWeight:'bold', color:"black"}}
                                >
                                    <span>How will Doggielawn help me?</span>
                                    <span><FaArrowRight /></span>
                                </button>
                            </div>
                            <div id='collapse1' className='collapse p-2'>
                                <div className='panel-body'>
                                    <p>Doggielawn is all about making the lives of pet parents more convenient when it comes to potty time! In fact, the idea for Doggielawn was conceived by the founders when their own busy schedules made it difficult to come home and walk the dogs at the same time each day. The guilt of thinking about their poor, furry babies waiting to go potty led to them to create a useful, convenient and eco-friendly solution for dog owners everywhere!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='panel-group my-4' id='accordion'>
                        <div className='panel panel-default' style={{border:'1px solid #ebebeb'}}>
                            <div className='panel-heading px-2' style={{background:'#ebebeb'}}>
                                <button
                                    className='btn panel-title btn-link text-left d-flex align-items-center justify-content-between border-0 py-4 px-0'
                                    data-bs-toggle='collapse'
                                    data-bs-target='#collapse2'
                                    aria-expanded='false'
                                    aria-controls='collapse2'
                                    style={{display: 'flex',justifyContent:'space-between', width:'100%', textDecoration:'none', fontSize:'16px', fontWeight:'bold', color:"black"}}
                                >
                                    <span>What sizes do you offer?</span>
                                    <span><FaArrowRight /></span>
                                </button>
                            </div>
                            <div id='collapse2' className='collapse p-2'>
                                <div className='panel-body'>
                                    <p>Doggielawn is all about making the lives of pet parents more convenient when it comes to potty time! In fact, the idea for Doggielawn was conceived by the founders when their own busy schedules made it difficult to come home and walk the dogs at the same time each day. The guilt of thinking about their poor, furry babies waiting to go potty led to them to create a useful, convenient and eco-friendly solution for dog owners everywhere!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='panel-group my-4' id='accordion'>
                        <div className='panel panel-default' style={{border:'1px solid #ebebeb'}}>
                            <div className='panel-heading px-2' style={{background:'#ebebeb'}}>
                                <button
                                    className='btn panel-title btn-link text-left d-flex align-items-center justify-content-between border-0 py-4 px-0'
                                    data-bs-toggle='collapse'
                                    data-bs-target='#collapse3'
                                    aria-expanded='false'
                                    aria-controls='collapse1'
                                    style={{display: 'flex',justifyContent:'space-between', width:'100%', textDecoration:'none', fontSize:'16px', fontWeight:'bold', color:"black"}}
                                >
                                    <span>How do I know which subscription is best for me and my furry friend?</span>
                                    <span><FaArrowRight /></span>
                                </button>
                            </div>
                            <div id='collapse3' className='collapse p-2'>
                                <div className='panel-body'>
                                    <p>Doggielawn is all about making the lives of pet parents more convenient when it comes to potty time! In fact, the idea for Doggielawn was conceived by the founders when their own busy schedules made it difficult to come home and walk the dogs at the same time each day. The guilt of thinking about their poor, furry babies waiting to go potty led to them to create a useful, convenient and eco-friendly solution for dog owners everywhere!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default FAQPage;

