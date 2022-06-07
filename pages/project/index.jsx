import React from "react";
import Footer from "../../components/footer/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectHeader from "../../components/ProjectHeader/ProjectHeader";
import styles from "../../styles/project.module.css";

const Project = () => {
  return (
    <>
      <Layout>
        <ProjectHeader />

        <section className={styles.project}>
          <div className={styles.containerOurProject}>
            <h1 className={styles.titleHeader}>Our Project</h1>

            <ProjectCard
              title="Cluster Caelus, Greenwich – BSD"
              body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corrupti corporis reiciendis, earum optio voluptatibus sint rem autem. Ab dolorem sapiente distinctio quod, a maiores nobis iure soluta accusamus suscipit."
              img="/cardProject1.png"
            />
            <ProjectCard
              title="Cluster Water Terrace, Grand Wisata"
              body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corrupti corporis reiciendis, earum optio voluptatibus sint rem autem. Ab dolorem sapiente distinctio quod, a maiores nobis iure soluta accusamus suscipit."
              img="/cardProject2.png"
            />
            <ProjectCard
              title="The Branz Simatupang"
              body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corrupti corporis reiciendis, earum optio voluptatibus sint rem autem. Ab dolorem sapiente distinctio quod, a maiores nobis iure soluta accusamus suscipit."
              img="/cardProject3.png"
            />
            <ProjectCard
              title="Pabrik Difi Medika"
              body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corrupti corporis reiciendis, earum optio voluptatibus sint rem autem. Ab dolorem sapiente distinctio quod, a maiores nobis iure soluta accusamus suscipit."
              img="/cardProject4.png"
            />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Project;
