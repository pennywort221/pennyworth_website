"use client";

import Footer from "@/components/layout/Footer";
import NavigationMenu from "@/components/layout/NavigationMenu";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { client } from "@/sanity/client";
import { blogBySlugQuery } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";
import Menu from "@/assets/svg/menu.svg";
import gsap from "gsap";

function BlogDetails() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { slug } = useParams<{ slug: string }>();
    const [blog, setBlog] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const menuBtnRef = useRef<HTMLButtonElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const lastScrollY = useRef(0);

    useEffect(() => {
        if (!slug) return;
        client.fetch(blogBySlugQuery, { slug }).then((data) => {
            setBlog(data);
            setLoading(false);
        });
    }, [slug]);

    useLayoutEffect(() => {
        if (loading || !blog) return;

        const ctx = gsap.context(() => {
            if (textRef.current) {
                gsap.from(textRef.current, {
                    opacity: 0,
                    x: -40,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: 0.1,
                });
            }

            if (imageRef.current) {
                gsap.from(imageRef.current, {
                    opacity: 0,
                    x: 40,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: 0.3,
                });
            }
        });

        return () => ctx.revert();
    }, [loading, blog]);

    useLayoutEffect(() => {
        if (!menuBtnRef.current) return;

        const showBtn = () => {
            gsap.to(menuBtnRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.35,
                ease: "power3.out",
                overwrite: "auto",
            });
        };

        const hideBtn = () => {
            gsap.to(menuBtnRef.current, {
                y: -30,
                opacity: 0,
                duration: 0.35,
                ease: "power3.out",
                overwrite: "auto",
            });
        };

        const onScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScrollY.current && currentScroll > 100) {
                hideBtn();
            } else {
                showBtn();
            }

            lastScrollY.current = currentScroll;
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (loading) {
        return (
            <>
                <div className="relative bg-primary min-h-[40vh] flex flex-col animate-pulse">
                    <div className="hero-header flex items-center justify-between px-5 md:px-10 pt-6">
                        <div className="w-[160px] h-[40px] bg-white/10 rounded"></div>
                        <div className="w-12 h-12 rounded-full bg-white/10 hidden md:block"></div>
                    </div>
                    <div className="flex flex-1 items-center px-5 md:px-10 py-10 md:py-16">
                        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            <div>
                                <div className="h-4 w-24 bg-white/10 rounded mb-4"></div>
                                <div className="h-10 w-full bg-white/10 rounded mb-2"></div>
                                <div className="h-10 w-2/3 bg-white/10 rounded mb-6"></div>
                            </div>
                            <div className="relative w-full aspect-[16/9] md:aspect-[4/3] rounded-lg bg-white/10"></div>
                        </div>
                    </div>
                </div>
                <section className="bg-white py-16 px-5 md:px-10 animate-pulse">
                    <div className="max-w-3xl mx-auto space-y-4">
                        <div className="h-4 bg-primary/10 rounded w-full"></div>
                        <div className="h-4 bg-primary/10 rounded w-5/6"></div>
                        <div className="h-4 bg-primary/10 rounded w-full"></div>
                        <div className="h-4 bg-primary/10 rounded w-4/5 pt-4"></div>
                        <div className="h-4 bg-primary/10 rounded w-3/4"></div>
                        <div className="h-4 bg-primary/10 rounded w-full pt-4"></div>
                        <div className="h-4 bg-primary/10 rounded w-5/6"></div>
                    </div>
                </section>
                <Footer />
            </>
        );
    }

    if (!blog) {
        return <div className="min-h-screen flex items-center justify-center text-primary">Blog not found.</div>;
    }

    return (
        <>
            <div className="relative bg-primary text-secondary min-h-[40vh] flex flex-col">
                {/* HEADER */}
                <div className="hero-header flex items-center justify-between px-5 md:px-10 pt-6">
                    <Link href="/" aria-label="Go to home">
                        <Image
                            src="/assets/images/design/penny-wort-logo.png"
                            alt="Penny Wort Logo"
                            width={160}
                            height={40}
                            priority
                            className="cursor-pointer"
                        />
                    </Link>

                    <button
                        ref={menuBtnRef}
                        onClick={() => setIsMenuOpen(true)}
                        className="fixed top-6 right-10 z-30 w-12 h-12 rounded-full flex items-center justify-center bg-primary backdrop-blur-lg border border-white/20 shadow-lg md:bg-primary md:backdrop-blur-none md:border-none md:shadow-none transition-all"
                    >
                        <Menu className="text-secondary" />
                    </button>
                </div>

                {/* HERO CONTENT */}
                <div className="flex flex-1 items-center px-5 md:px-10 py-10 md:py-16">
                    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div ref={textRef} className="text-left">
                            {blog.publishedAt && (
                                <p className="text-secondary/70 mb-4">{new Date(blog.publishedAt).toLocaleDateString()}</p>
                            )}
                            <h1 className="md:heading-xl-semibold heading-md leading-tight mb-6">
                                {blog.title}
                            </h1>
                        </div>
                        {blog.image && (
                            <div ref={imageRef} className="relative w-full aspect-[16/9] md:aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                                <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* BLOG CONTENT */}
            <section className="bg-white py-16 px-5 md:px-10">
                <div className="max-w-3xl mx-auto">

                    <div className="prose prose-lg px-2 md:px-0 mx-auto text-primary/80">
                        {blog.body ? <PortableText value={blog.body} /> : <p>{blog.description}</p>}
                    </div>
                </div>
            </section>

            <Footer />

            <NavigationMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </>
    );
}

export default BlogDetails;
