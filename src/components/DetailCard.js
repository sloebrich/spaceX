// jshint esversion:6
import React from "react";
import ImageCarousel from "./Carousel";
import {Card, Row, Col, Table} from 'react-bootstrap';

function DetailCard(props){

  const launch = props.entry;
  const article = launch.links.article_link;
  const video = launch.links.video_link;
  const images = launch.links.flickr_images;
  const date = /(\d+)-(\d+)-(\d+)/.exec(launch.launch_date_utc);

if(images.length > 0){
 return (<Row>
 <Col xl={8} lg={8} md={8} sm={12} xs={12} className="detail-card-col">
   <Card bg="dark" text="white" className="detail-card">
 <Card.Body className="title-wrapper">
 <Card.Title>{launch.flight_number}. {launch.mission_name}</Card.Title>
   </Card.Body>
 <Table variant="dark">
 <tbody>
 <tr>
 <td style={{textAlign: "right", width: "25%"}}>Launch date: </td>
 <td>{date[3]}/{date[2]}/{date[1]}</td>
 </tr>
 <tr>
 <td style={{textAlign: "right"}}>Launch site: </td>
 <td>{launch.launch_site.site_name_long}</td>
 </tr>
 <tr>
 <td style={{textAlign: "right"}}>Rocket: </td>
 <td>{launch.rocket.rocket_name}, type {launch.rocket.rocket_type}</td>
 </tr>
 <tr>
 <td style={{textAlign: "right"}}>Payload: </td>
 <td>{launch.rocket.second_stage.payloads.map(function(payload){return payload.payload_id+ " "+ payload.payload_type})}</td>
 </tr>
 <tr>
 <td style={{textAlign: "right"}}>Success: </td>
 <td>{launch.launch_success ?
   <div style={{color:"#5cb85c"}}>Launch was successful.</div>:
   <div style={{color:"#d9534f"}}>Launch failed.</div>}</td>
 </tr>
 </tbody>
 </Table>
   <Card.Body>
 <Card.Text>
{launch.details}
 </Card.Text>
 <div style={{textAlign: "center"}}>
 <Card.Link href={article} target="_blank">Go to article</Card.Link>
<Card.Link href={video} target="_blank">Go to video</Card.Link>
</div>
</Card.Body>
 </Card>
 </Col>
<Col xl={4} lg={4} md={12} sm={12} xs={12} className="carousel-col">
 <ImageCarousel images={images}/>
</Col>
</Row>)
} else {
  return <Row>
  <Col xl={2} lg={2} md={2}/>
  <Col xl={8} lg={8} md={8} sm={12} xs={12} className="detail-card-col">
  <Card bg="dark" text="white" className="detail-card">
<Card.Body className="title-wrapper">
<Card.Title>{launch.flight_number}. {launch.mission_name}</Card.Title>
  </Card.Body>
<Table variant="dark">
<tbody>
<tr>
<td style={{textAlign: "right", width: "25%"}}>Launch date: </td>
<td>{launch.launch_date_utc.substring(8,10)}/{launch.launch_date_utc.substring(5,7)}/{launch.launch_date_utc.substring(0,4)}</td>
</tr>
<tr>
<td style={{textAlign: "right"}}>Launch site: </td>
<td>{launch.launch_site.site_name_long}</td>
</tr>
<tr>
<td style={{textAlign: "right"}}>Rocket: </td>
<td>{launch.rocket.rocket_name}, type {launch.rocket.rocket_type}</td>
</tr>
<tr>
<td style={{textAlign: "right"}}>Payload: </td>
<td>{launch.rocket.second_stage.payloads.map(function(payload){return payload.payload_id+ " "+ payload.payload_type})}</td>
</tr>
<tr>
<td style={{textAlign: "right"}}>Success: </td>
<td>
{launch.launch_success ?
  <div style={{color:"#5cb85c"}}>Launch was successful.</div>:
  <div style={{color:"#d9534f"}}>Launch failed.</div>}
</td>
</tr>
</tbody>
</Table>
  <Card.Body>
<Card.Text>
{launch.details}
</Card.Text>
<div style={{textAlign: "center"}}>
{article && <Card.Link href={article} target="_blank">Go to article</Card.Link>}
{video && <Card.Link href={video} target="_blank">Go to video</Card.Link>}
</div>
</Card.Body>
</Card>
</Col>
</Row>
}
}

export default DetailCard;
