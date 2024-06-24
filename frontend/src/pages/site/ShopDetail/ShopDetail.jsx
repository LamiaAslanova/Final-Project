import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ShopDetail.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Delivery from '../../../components/site/ShopComponents/DeliveryInfo/Delivery';

const ShopDetail = () => {
    useEffect(() => {
        $(document).ready(function () {
            $('.slider').slick({
                dots: true,
                prevArrow: '<a class="slick-prev" href="#"><i data-icon="ei-arrow-left" data-size="m"></i></a>',
                nextArrow: '<a class="slick-next" href="#"><i data-icon="ei-arrow-right" data-size="m"></i></a>',
                customPaging: function (slick, index) {
                    var targetImage = slick.$slides.eq(index).find('img').attr('src');
                    return '<img src="' + targetImage + '"/>';
                }
            });
        });
    }, []);

    return (
        <div className="shopdet">
            <div className="custom-container shopdet__mini__cont">
                <div className="row shopdet__mini__row">
                    <div className="col-10 shopdet__mini__col">
                        <Delivery />
                    </div>
                </div>
            </div>
            <div className="custom-container shopdet__heading__cont">
                <div className="row shopdet__heading__row">
                    <div className="col-10 shopdet__path">
                        <p>Home / Ancient Greek Crested Helmet Replica</p>
                    </div>
                    <div className="col-10 shopdet__title">
                        <h2>Ancient Greek Crested Helmet Replica</h2>
                    </div>
                </div>
            </div>
            <div className="custom-container shopdet__cont">
                <div className="row shopdet__row">
                    <div className="col-10 shopdet__col">
                        <div className="row shopdet__row2">
                            <div className="col-9 det__left">
                                <div className="layout">
                                    <ul className="slider">
                                        <li>
                                            <img src="https://www.britishmuseumshoponline.org/media/catalog/product/cache/0e0b3404d45a002a230fc8c89fb631e6/n/5/n551230_1_ancient_greek_crested_helmet_replica.jpg" alt="" />
                                        </li>
                                        <li>
                                            <img src="https://www.britishmuseumshoponline.org/media/catalog/product/cache/0e0b3404d45a002a230fc8c89fb631e6/n/5/n551230_1_ancient_greek_crested_helmet_replica.jpg" alt="" />
                                        </li>
                                    </ul>
                                </div>
                                <Tabs>
                                    <TabList>
                                        <Tab>About</Tab>
                                        <Tab>Product Information</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <p>An impressive home ornament inspired by ancient Greek helmets.

                                            The piece is crafted in Greece from brass finished with a gold-coloured stand and a marble base. A green-coloured patina gives the ornament an aged appearance, imitating historical objects as they would now appear.

                                            The ornament celebrates the striking armour worn by soldiers in ancient Greek armies. This example features two cheek pieces for maximum protection and is finished with ornate, swirling decoration and a large plume based on the horsehair embellishments often found on ancient armour.

                                            A fabulous piece for lovers of military history.</p>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="row tabpanel__row">
                                            <div className="col-6 tabpanel__col">
                                                <span>DIMENSIONS:</span>
                                                <p>H28.5 x W9.5 x L16cm</p>
                                            </div>
                                            <div className="col-6 tabpanel__col">
                                                <span>DIMENSIONS:</span>
                                                <p>H28.5 x W9.5 x L16cm</p>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                            <div className="col-3 det__right">
                                <div className="det__content">
                                    <h2>$145.00</h2>
                                    <div className="quantity">
                                        <div className="quantity__title">
                                            <p>Quantity</p>
                                        </div>
                                        <div className="quantity__func">
                                            <button><i class="fa-solid fa-caret-left"></i></button>
                                            <p>1</p>
                                            <button><i class="fa-solid fa-caret-right"></i></button>
                                        </div>
                                    </div>
                                    <button className='addtobasket__button'>Add to basket</button>
                                    <div class="accordion" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Delivery
                                                </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <ul>
                                                        <li>Free standard UK delivery on orders over £100.</li>
                                                        <li>Premium delivery is available for UK orders only. Orders placed before 1pm UK time Monday-Friday will be dispatched on the same day for next working day delivery. Orders placed after 1pm will be dispatched the following working day.</li>
                                                        <li>Charges are calculated depending on the weight (kg) and destination of your order.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Returns
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <p>If you are not entirely happy with anything you have purchased from the online shop, please contact Customer Services within 14 days of delivery.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopDetail;
