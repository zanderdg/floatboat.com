import {
  Typography,
  Row,
  Col,
  Button,
  Input,
  Select,
  Tag,
  Slider,
  Pagination,
} from "antd";
import { ArrowRightOutlined, SearchOutlined } from "@ant-design/icons";
import FindFloat from "../components/FindFloat";
import BoatCard from "../components/Cards/BoatCard";
import BoatCardHorizontal from "../components/Cards/BoatCardHorizontal";
import Layout from "../Layout/Layout";
import listingImg from "../assets/listing.png";
import circleImg from "../assets/circle-icon.png";
import { useNavigate } from "react-router-dom";
import { ImEqualizer, HiDotsVertical, HiDotsHorizontal } from "react-icons/all";
import { useEffect, useState } from "react";
import { publicAPI } from "../config/constants";

const Listing = () => {
  let navigate = useNavigate();
  const [vertical, setVertical] = useState(true);
  const [perPage, setPerPage] = useState(10);
  const [priceRanger, setPriceRanger] = useState(["", ""]);
  const [rangeData, setRangeData] = useState(null);
  const [destinationData, setDestinationData] = useState(null);
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [OrderBy, setOrderBy] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [destination, setDestination] = useState([]);

  const getData = async () => {
    const res = await publicAPI.get(
      `/boats/getAll?page=${page}&perPage=${perPage}&searchString=${search}&priceFrom=${priceRanger[0]}&priceTo=${priceRanger[1]}&orderBy=${OrderBy}&zipCodes=${zipCode}&destination=${destination}`
    );
    if (res?.data) {
      setData(res?.data);
    }
  };

  const getRangeData = async () => {
    const res = await publicAPI.get(`/boats/getPrice`);
    setRangeData([res?.data?.minPrice, res?.data?.maxPrice]);
  };

  const getDestinationData = async () => {
    const res = await publicAPI.get(`/boats/get-destinations`);
    setDestinationData(res?.data);
  };

  const onFilter = async () => {
    const res = await publicAPI.get(
      `/boats/getAll?page=${page}&perPage=${perPage}&searchString=${search}&priceFrom=${priceRanger[0]}&priceTo=${priceRanger[1]}&orderBy=${OrderBy}&zipCodes=${zipCode}&destination=${destination}`
    );
    if (res?.data) {
      setData(res?.data);
    }
  };

  useEffect(() => {
    getData();
  }, [priceRanger, search, OrderBy, page]);

  useEffect(() => {
    getRangeData();
    getDestinationData();
  }, []);

  return (
    <div className="listing-main">
      <Layout active={"listing"} faq={false} scroll={false} showHeader={false}>
        <div className="listing-header">
          <p>SPECTACULAR SECOND HOMES</p>
          <Typography.Title level={1}>
            Luxury Homes In Top Locations
          </Typography.Title>
          <p>
            Explore our collection of available homes and Pacaso-worthy
            Prospects.
          </p>
          <div className="listing-section">
            <div className="filters">
              <Typography.Title level={5}>
                <ImEqualizer /> Filters
              </Typography.Title>
              {/* <p>SORT BY:</p>
              <Select style={{ width: "100%" }} defaultValue={"featured"}>
                <Select.Option value="featured">Featured</Select.Option>
              </Select>
              <div style={{ margin: "20px 0" }}>
                <Tag closable>Featured</Tag>
                <Tag closable>Best Deals</Tag>
              </div> */}
              <p>DESTINATIONS:</p>
              <Select
                mode="multiple"
                allowClear
                value={destination}
                style={{ width: "100%" }}
                onChange={(e) => setDestination(e)}
              >
                {destinationData?.map((des) => (
                  <Select.Option value={des}>{des}</Select.Option>
                ))}
              </Select>
              {/* <div style={{ margin: "20px 0" }}>
                <Tag closable>Big Bear, CA</Tag>
                <Tag closable>USA</Tag>
              </div> */}
              <p>ZIPCODE:</p>
              <Input
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
              <button className="primaryBtn" onClick={() => onFilter()}>
                Filter
              </button>

              <button
                className="primaryBtn"
                onClick={async () => {
                  await setDestination([]);
                  await setZipCode("");
                  await getData();
                }}
              >
                Clear
              </button>
              {/* <div style={{ margin: "20px 0" }}>
                <Tag closable>75855</Tag>
                <Tag closable>74300</Tag>
              </div> */}
            </div>
            <div className="listings">
              <div className="top-filters">
                <Row gutter={[40, 40]}>
                  <Col xs={24} md={24} lg={7}>
                    <p>Quick Search:</p>
                    <Input
                      prefix={<SearchOutlined />}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </Col>

                  <Col xs={24} md={24} lg={7}>
                    <p>Price Range:</p>
                    {rangeData && (
                      <Slider
                        range
                        step={10}
                        min={rangeData[0]}
                        max={rangeData[1]}
                        defaultValue={rangeData}
                        onChange={(e) => {
                          setPriceRanger(e);
                        }}
                      />
                    )}
                  </Col>

                  <Col xs={24} md={24} lg={10}>
                    <p>Order By:</p>
                    <div>
                      <Tag
                        style={{ cursor: "pointer" }}
                        color={OrderBy === "highest" && "#10252a"}
                        onClick={() => {
                          if (OrderBy === "highest") {
                            setOrderBy(" ");
                          } else {
                            setOrderBy("highest");
                          }
                        }}
                      >
                        Highest Price
                      </Tag>
                      <Tag
                        style={{ cursor: "pointer" }}
                        color={OrderBy === "lowest" && "#10252a"}
                        onClick={() => {
                          if (OrderBy === "lowest") {
                            setOrderBy(" ");
                          } else {
                            setOrderBy("lowest");
                          }
                        }}
                      >
                        Lowest Price
                      </Tag>
                      <Tag
                        style={{ cursor: "pointer" }}
                        color={OrderBy === "newest" && "#10252a"}
                        onClick={() => {
                          if (OrderBy === "newest") {
                            setOrderBy(" ");
                          } else {
                            setOrderBy("newest");
                          }
                        }}
                      >
                        Newest Listing
                      </Tag>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="toggle-main">
                <div>
                  <Pagination
                    defaultCurrent={page}
                    total={data?.totalDocs}
                    pageSize={perPage}
                    // showSizeChanger
                    current={data?.page}
                    onChange={(page) => setPage(page)}
                  />
                </div>
                <div className="toggle-button">
                  <Button
                    icon={<HiDotsHorizontal />}
                    type="primary"
                    onClick={() => {
                      setVertical(false);
                    }}
                  ></Button>
                  <Button
                    icon={<HiDotsVertical />}
                    type="primary"
                    onClick={() => {
                      setVertical(true);
                    }}
                  ></Button>
                </div>
              </div>
              <Row gutter={[20, 20]}>
                {data?.docs?.map((d) =>
                  vertical ? (
                    <Col xs={24}>
                      <div>
                        <BoatCardHorizontal data={d} />
                      </div>
                    </Col>
                  ) : (
                    <Col xs={24} md={12} xl={8}>
                      <div>
                        <BoatCard data={d} />
                      </div>
                    </Col>
                  )
                )}
              </Row>
            </div>
          </div>
          {/* <Button type="primary">
            LOAD MORE <ArrowRightOutlined />
          </Button> */}
        </div>
        <div className="float-offerings">
          <Typography.Title level={1} style={{ textAlign: "center" }}>
            Float Offerings
          </Typography.Title>
          <Row gutter={[20, 20]} justify="space-between" className="content">
            <Col xs={24} lg={11}>
              <Typography.Title level={1}>
                <img src={circleImg} />{" "}
                <span className="kaushan-general">
                  Buy what's right for you
                </span>
              </Typography.Title>
              <p>
                Explore our collection of stunning single-family homes in top
                second home destinations. We'll help you find the perfect fit,
                and you decide how many shares you'd like to own.
              </p>
            </Col>
            <Col xs={24} lg={11}>
              <Typography.Title level={1}>
                <img src={circleImg} />{" "}
                <span className="kaushan-general">
                  Sell part (or all) of your boat
                </span>
              </Typography.Title>
              <p>
                Explore our collection of stunning single-family homes in top
                second home destinations. We'll help you find the perfect fit,
                and you decide how many shares you'd like to own.
              </p>
            </Col>
          </Row>
          <Button type="primary">
            VIEW LISTINGS <ArrowRightOutlined />
          </Button>
        </div>
        <FindFloat />
      </Layout>
    </div>
  );
};

export default Listing;
