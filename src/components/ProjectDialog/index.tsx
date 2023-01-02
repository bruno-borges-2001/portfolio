'use client'

import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react"
import { HiExternalLink, HiX } from 'react-icons/hi'
import { ProjectType } from "../../types";
import styles from './styles.module.scss'

interface ProjectDialogProps {
  project: ProjectType
}

export default function ProjectDialog({ project }: ProjectDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() { setIsOpen(false) }
  function openModal() { setIsOpen(true) }

  return (
    <>
      <button
        className={styles.buttonContainer}
        style={{ backgroundImage: `url(${project.images[0]})` }}
        onClick={openModal}
      >
        {project.title}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter={styles.backdropTransitionEnter}
            enterFrom={styles.backdropTransitionEnterFrom}
            enterTo={styles.backdropTransitionEnterTo}
            leave={styles.backdropTransitionLeave}
            leaveFrom={styles.backdropTransitionLeaveFrom}
            leaveTo={styles.backdropTransitionLeaveTo}
          >
            <div className={styles.backdrop} />
          </Transition.Child>

          <div className={styles.dialogWrapper}>
            <div className={styles.dialogContainer}>
              <Transition.Child
                as={Fragment}
                enter={styles.dialogTransitionEnter}
                enterFrom={styles.dialogTransitionEnterFrom}
                enterTo={styles.dialogTransitionEnterTo}
                leave={styles.dialogTransitionLeave}
                leaveFrom={styles.dialogTransitionLeaveFrom}
                leaveTo={styles.dialogTransitionLeaveTo}
              >
                <Dialog.Panel className={styles.dialog}>

                  <button
                    className={styles.closeButton}
                    onClick={closeModal}
                  >
                    <HiX />
                  </button>

                  <div className={styles.leftColumn}>
                    <Image src={project.images[0]} alt={'number 1'} height={150} width={287} />
                    <Dialog.Title>{project.title}</Dialog.Title>
                  </div>
                  <div className={styles.rightColumn}>
                    {project.description?.map((el, i) => <p key={`d ${project.title} n ${i}`}>{el || <br />}</p>)}
                    <ul>
                      {project.bulletPoints?.map((el, i) => <li key={`b ${project.title} n ${i}`}>{el}</li>)}
                    </ul>
                    <footer>
                      {project.links.map((el, i) => (
                        <a key={el.label} href={el.href}>
                          {el.label}
                          <HiExternalLink />
                        </a>
                      ))}
                    </footer>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}